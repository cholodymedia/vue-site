<template>
  <div class="aboutWrapper">
    <div class="content">
      <div class="image-box">
        <img :src="image" alt="Portrait" data-aos="flip-left" data-aos-duration="500">
      </div>
      <div class="text-box">
        <p class="about" data-aos="fade-down">About</p>
        <hr data-aos="fade-down">
        <p class="describ" data-aos="fade-left">
          <!-- eslint-disable -->
          My name is Marcin. I'm a senior computer science student in the best IT school in Poland (or so they say). Programming is my passion and the job of my dreams.
          <!-- eslint-enable -->
        </p>
      </div>
    </div>
    <div class="footer">
      © Copyright cholodymedia
    </div>
  </div>
</template>

<script>
import Me from '@/assets/me_light.png';

export default {
  name: 'About',
  data() {
    return {
      image: Me,
    };
  },
};
</script>

<style lang="scss" scoped>
  .aboutWrapper {
    width: 100vw;
    height: 68vh;
    background: #212121;
    display: flex;
    flex-direction: column;
    .content {
      height: 60vh;
      width: 100vw;
      display: flex;
      flex-direction: row;
      .image-box {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 25vw;
          opacity: 0.9;
        }
      }
      .text-box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .about {
          color: #DFDEDF;
          font-size: 1.5rem;
          margin-bottom: 1.5%;
        }
        hr {
          width: 17%;
          border: 1.5px solid #2D98B8;
          border-radius: 30px;
          margin-bottom: 2%;
        }
        .describ {
          color: rgb(167, 165, 167);
          width: 65%;
          font-size: 1.15rem;
          line-height: 2rem;
          text-align: justify;
        }
      }
    }
    .footer {
      height: 8vh;
      width: 100vw;
      background: #262727;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      color: rgb(167, 165, 167);
    }
    @media (max-width: 1200px) {
      height: 50vh;
      .content {
      .image-box {
        flex: 1;
        img {
          width: 25vw;
          opacity: 0.9;
        }
      }
      .text-box {
        flex: 1.6;
        .about {
          font-size: 1.5rem;
          margin-bottom: 2%;
        }
        hr {
          width: 25%;
          border: 1.5px solid #2D98B8;
          border-radius: 30px;
          margin-bottom: 4%;
        }
        .describ {
          width: 80%;
          font-size: 1.1rem;
          line-height: 2rem;
        }
      }
    }
    }
    @media (max-width: 760px) {
      height: 70vh;
      .content {
        height: 60vh;
      .image-box {
        display: none;
        img {
          width: 25vw;
          opacity: 0.9;
        }
      }
      .text-box {
        flex: 1.6;
        .about {
          font-size: 1.5rem;
          margin-bottom: 2%;
          }
        hr {
          width: 30%;
          border: 1.5px solid #2D98B8;
          border-radius: 30px;
          margin-bottom: 4%;
          }
        .describ {
          width: 80%;
          font-size: 1.1rem;
          line-height: 2rem;
          }
        }
      }
      .footer {
        height: 10vh;
        width: 100vw;
        background: #262727;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        color: rgb(167, 165, 167);
      }
    }
  }
</style>
