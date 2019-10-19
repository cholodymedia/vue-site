<template>
  <div class="startWrapper">
    <nav class="nav">
      <div class="socialBox">
        <a href="https://github.com/cholodymedia" target="blank">
          <font-awesome-icon
            :icon="['fab','github']"
            v-if="link === false || show === true || hide === true"
            :class="{'animation-show' : show, 'animation-hide' : hide}"
          />
        </a>
      </div>
      <div class="socialBox">
        <a href="mailto:cholodymedia@gmail.com">
          <font-awesome-icon
            :icon="['far','envelope']"
            v-if="link === false || show === true || hide === true"
            :class="{'animation-show' : show, 'animation-hide' : hide}"
          />
        </a>
      </div>
      <div class="socialBox">
        <a href="https://www.instagram.com/cholodymedia/" target="blank">
          <font-awesome-icon
            :icon="['fab','instagram']"
            v-if="link === false || show === true || hide === true"
            :class="{'animation-show' : show, 'animation-hide' : hide}"
          />
        </a>
      </div>
      <div class="socialButton">
        <div class="circle" @click="handleClick">
          <font-awesome-icon
            :icon="['fas','link']"
            v-if="link === true"
          />
          <font-awesome-icon
            :icon="['fas','times']"
            v-if="link === false"
          />
        </div>
      </div>
    </nav>
    <div class="main">
      <p class="title">cholodymedia</p>
      <p class="subtitle">
        <span class="lang">#JS</span>
        <span class="lang">#PHP</span>
        <span class="lang">#MySQL</span>
      </p>
    </div>
    <div class="buttom">
      <div class="title">Check my projects</div>
      <div class="arrow-box">
        <font-awesome-icon
          :icon="['fas','angle-double-down']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      link: true,
      show: false,
      hide: false,
    };
  },
  methods: {
    handleClick() {
      if (this.link) {
        this.link = false;
        this.hide = false;
        this.show = true;
      } else {
        this.link = true;
        this.show = false;
        this.hide = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .startWrapper {
    width: 100vw;
    height: 100vh;
    background: #212121;
    display: flex;
    flex-direction: column;

    .nav {
      flex: 1.8;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .socialBox {
        width: 22vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        color: #FAFAFA;
        a {
          text-decoration: none;
          color: #FAFAFA;
        }
        :last-of-type {
          margin-right: 3vw;
        }
        .animation-show {
          animation: socialAppear 0.5s ease-out forwards;
        }
        @keyframes socialAppear {
          0% {
            opacity: 0;
            transform: translate(10vw);
          }
          100% {
            opacity: 1;
            transform: translate(0);
          }
        }
        .animation-hide {
          animation: socialDisappear 0.5s ease-out forwards;
        }
        @keyframes socialDisappear {
          0% {
            opacity: 1;
            transform: translate(0);
          }
          100% {
            opacity: 0;
            transform: translate(10vw);
          }
        }
      }
      .socialButton {
        width: 22vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .circle {
          width: 14vw;
          height: 14vw;
          border-radius: 30px;
          background-color: #424242;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.3rem;
          color: #FAFAFA;
        }
      }
    }

    .main {
      flex: 8;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 2.2rem;
        color: #FAFAFA;
        letter-spacing: 1.5px;
      }
      .subtitle {
        font-size: 1.3rem;
        margin-top: 15px;
        letter-spacing: 1px;
        .lang {
          margin-left: 4px;
          margin-right: 4px;
        }
        .lang:first-of-type {
          color: rgb(206, 206, 4);
        }
        .lang:nth-of-type(2) {
          color: rgb(196, 1, 186);
        }
        .lang:nth-of-type(3) {
          color: rgb(231, 153, 7);
        }
      }
    }

    .buttom {
      flex: 4;
      display: flex;
      flex-direction: column;
      .title {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        color: #9E9E9E;
      }
      .arrow-box {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: #9E9E9E;
        animation: updown 1.2s ease-out infinite;
      }
      @keyframes updown {
        0% {
          transform: translateY(-10px);
        }
        50% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(-10px);
        }
      }
    }
  }
</style>
