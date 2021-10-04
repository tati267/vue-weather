<template>
  <section class="app">
    <router-view class="container" />
    <div class="nav">
      <router-link to="/">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.15 18H2.85C2.32533 18 1.9 17.5664 1.9 17.0315V9.2839H0L8.8274 0.284035C9.00559 0.102181 9.24739 0 9.49953 0C9.75166 0 9.99346 0.102181 10.1716 0.284035L19 9.2839H17.1V17.0315C17.1 17.5664 16.6747 18 16.15 18ZM7.6 11.2208H11.4V16.0631H15.2V8.14887L9.5 2.33813L3.8 8.14887V16.0631H7.6V11.2208Z"
            fill="#3E5B73"
          />
        </svg>
      </router-link>
      <router-link to="/favourite">
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.7285 22.092L1.91666 19.721V3.613L8.5215 5.913L15.2595 1.892L21.0833 4.323V20.477L15.4071 18.107L8.72946 22.092H8.7285ZM3.83333 6.392V18.279L7.66666 19.612V7.72L3.83333 6.392ZM13.4167 5.292L9.58333 7.58V19.28L13.4167 16.992V5.292ZM15.4071 4.106L15.3333 4.152V15.923L19.1667 17.523V5.676L15.4071 4.106Z"
            fill="#3E5B73"
          />
        </svg>
      </router-link>
      <router-link to="/menu">
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.125 19H8.625V17H20.125V19ZM20.125 15H2.875V13H20.125V15ZM20.125 11H8.625V9H20.125V11ZM20.125 7H2.875V5H20.125V7Z"
            fill="#3E5B73"
          />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.app {
  width: 414px;
  min-height: 736px;
  margin: 0 auto;
  background: #1c2831;
  font-family: "Roboto", Arial, sans-serif;
  text-align: left;
  color: #f0f2f3;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.25px;
  position: relative;
}

.container {
  padding: 0 37px;
}

.nav {
  width: inherit;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  height: 85px;
  justify-content: space-around;
  background: #13232e;
  position: absolute;
  bottom: 0px;
}

.router-link-active svg path {
  fill: #b858e1;
}
</style>
