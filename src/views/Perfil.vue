<template>
  <div class="perfil">
    <div class="perfil-info">
      <h2>MI PERFIL</h2>
      <div class="img-proof"></div>
      <p>Heyder Alexis Rojas Pineda</p>
      <p><span>E-mail:</span> heyderrojas2003@gmail.com</p>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    UserDetailByDocumento: {
      query: gql`
            query ($documento: String!) {
                userDetailByDocumento(documento: $documento) {
                    username
                    password
                    documento
                    email
                    nombres
                    apellidos
                    }
                }
            }
        `,
      variables() {
        return {
          documento: this.documento,
        };
      },
    },
  },
  data() {
      return {
          UserDetailByDocumento: [],
          visible: true,
      };
  },
};
</script>

<style>
.perfil {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.perfil-info {
  position: relative;
  width: 100%;
  height: 82.1vh;
  text-align: center;

  background: #000000;
  color: #f1f1f1;
}
.perfil-info h2 {
  font-size: 30px;
  font-weight: 400;
  margin-top: 50px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f1f1f1;
}
.perfil-info p {
  font-size: 20px;
  margin-top: 50px;
}
.img-proof {
  position: relative;
  left: 43%;
  width: 200px;
  height: 200px;
  margin-top: 50px;

  border-radius: 24px;
  background: #f1f1f1;
}
</style>