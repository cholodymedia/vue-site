<template>
  <div class="startWrapper">
    <nav class="nav">
      <div class="socialBox">
        <a href="https://github.com/cholodymedia" target="blank">
          <font-awesome-icon
            :icon="['fab','github']"
            v-if="link === false || show === true || hide === true"
            :class="{'animation-show' : show, 'animation-hide' : hide}"
            title="github"
          />
        </a>
      </div>
      <div class="socialBox">
        <a href="mailto:cholodymedia@gmail.com">
          <font-awesome-icon
            :icon="['far','envelope']"
            v-if="link === false || show === true || hide === true"
            :class="{'animation-show' : show, 'animation-hide' : hide}"
            title="email"
          />
        </a>
      </div>
      <div class="socialBox">
        <a href="https://www.instagram.com/cholodymedia/" target="blank">
          <font-awesome-icon
            :icon="['fab','instagram']"
            v-if="link === false || show === true || hide === true"
            :class="{'animation-show' : show, 'animation-hide' : hide}"
            title="instagram"
          />
        </a>
      </div>
      <div class="socialButton" data-aos="fade-up-left">
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
      <p class="title" data-aos="zoom-in" data-aos-duration="1000">cholodymedia</p>
      <p class="subtitle" data-aos="zoom-in-up">
        <span class="lang">#Vue</span>
        <span class="lang">#MySQL</span>
        <span class="lang">#PHP</span>
      </p>
    </div>
    <div class="buttom" data-aos="fade-up">
      <div class="title">Check my projects</div>
      <div class="arrow-box">
        <font-awesome-icon
          :icon="['fas','angle-double-down']"
          class="arrow"
          @click="scroll"
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
        this.show = true;
        setTimeout(this.hideShow, 500);
      } else {
        this.link = true;
        this.hide = true;
        setTimeout(this.hideHide, 500);
      }
    },
    hideShow() {
      this.show = false;
    },
    hideHide() {
      this.hide = false;
    },
    scroll() {
      document.getElementsByClassName('projects-wrapper')[0].scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
  .startWrapper {
    width: 100vw;
    height: 100vh;
    min-height: 500px;
    background: #212121;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      height: 90vh;
    }
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
        @media (min-width: 768px) {
          font-size: 2rem;
        }
        @media (min-width: 1200px) {
          width: 8vw;
          font-size: 1.8rem;
          :last-of-type {
            margin-right: 0vw;
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
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: #424242;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.3rem;
          color: #FAFAFA;
        }
        @media (min-width: 768px) {
          .circle {
            width: 4.8rem;
            height: 4.8rem;
            border-radius: 50%;
            font-size: 1.8rem;
          }
        }
        @media (min-width: 1200px) {
          width: 10vw;
          .circle {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            font-size: 1.5rem;
          }
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
          color: #41b85f;
        }
        .lang:nth-of-type(3) {
          color: rgb(196, 1, 186);
        }
        .lang:nth-of-type(2) {
          color: rgb(231, 209, 7);
        }
      }
      @media (min-width: 768px) {
        .title {
          font-size: 3.5rem;
        }
        .subtitle {
          font-size: 2rem;
          margin-top: 20px;
          letter-spacing: 2px;
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
        .arrow {
          animation: updown 1.2s ease-out infinite;
          padding: 10px;
        }
        :hover {
          cursor: pointer;
          color: rgb(216, 216, 216);
        }
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
      @media (min-width: 768px) {
        .title {
          font-size: 2rem;
        }
        .arrow-box {
          font-size: 3rem;
        }
      }
      @media (min-width: 1200px) {
        flex: 2.5;
        .title {
          font-size: 1.8rem;
        }
        .arrow-box {
          font-size: 1.8rem;
        }
      }
    }
  }
</style>
