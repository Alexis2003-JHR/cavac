<template>
  <div class="Historial">
    <div class="container-title">
      <h2>
        <span>Reservas de {{ username }}</span>
      </h2>
    </div>

    <div class="container-table">
        <table>
            <tr>
                <th>Habitacion</th>
                <th>Ingreso</th>
                <th>Salida</th>
                <th>Fecha Creacion Reserva</th>
                <th>Noches</th>
                <th>Precio</th>
            </tr>

            <tr v-for="reserva in reservaByUsuario" :key="reserva.id">
                <td>{{ reserva.nombreHabitacion }}</td>
                <td>{{ reserva.fechaIngreso }}</td>
                <td>{{ reserva.fechaSalida }}</td>
                <td>{{ reserva.fechaCreacionReserva }}</td>
                <td>{{ reserva.noches}}</td>
                <td>${{ reserva.valorReserva }} COP</td>
            </tr>
        </table>
    </div>
  </div>

</template>


<script>
import gql from "graphql-tag";

export default {
  name: "Reserva",

  data: function () {
    return {
      username: localStorage.getItem("username") || "none",
      reservaByUsuario: [],
      };
    },
  apollo: {
    reservaByUsuario: {
      query: gql`
      query ReservaByUsuario($username: String!) {
        reservaByUsuario(username: $username) {
          id
          username
          nombreHabitacion
          fechaIngreso
          fechaSalida
          fechaCreacionReserva
          noches
          valorReserva
        }
      }
      `,
      variables() {
        return{
          username: this.username,
        };
      },
    },
  },
  
  methods: {
    processReserva: async function() {

      if (localStorage.getItem("token_access")  === null ||
          localStorage.getItem("token_refresh") === null ) {
        this.$emit("logOut");
        return;
    }

    localStorage.setItem("token_access", "");

    await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($refresh: String!) {
              refreshToken(refresh: $refresh) {
                access
              }
            }
          `,
          variables: {
            refresh: localStorage.getItem("token_refresh"),
          },
        })
        .then((result) => {
          localStorage.setItem("token_access", result.data.refreshToken.access);
        })
        .catch((error) => {
          this.$emit("logOut");
          return;
        });
    },
  },

  created: function (){
    this.$apollo.queries.reservaByUsuario.refetch();
  }
};
</script>


<style>
.Historial {
  width: 100%;
  height: 80.1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.Historial h2{
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 20px;
  color: #401201;
}
.Historial .container-table{
    width: 80%;
}
.Historial table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.Historial table td,.Historial table th {
  border: none;
  padding: 8px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
.Historial table tr:nth-child(even) {
  background-color: #f1e7c7;
}
.Historial table tr:hover {
  cursor: pointer;
  background-color: rgba(217, 198, 139, 0.301)
}
.Historial table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000000;
  color: #D9C58B;
}
</style>