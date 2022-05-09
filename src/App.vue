<template>
<div class="start error" v-if="mob">
  Unfortunately, online tuner is currently only available for PC.
</div>
<div class="start">
  Press to start tune
</div>
<div class="wrap">
  <div class="note">
    E4
  </div>
  <div class="cents"></div>
  <div class="nav">
    <div class="helpUkraine" @click="go('https://www.comebackalive.in.ua/')">Support Ukraine</div>
    <div class="gitHub" @click="go('https://github.com/nonconformiste/')">Github</div>
  </div>
</div>
</template>

<script>
import '@/script/script.js'

export default {
  name: 'App',
  methods:  {
    go(href){
      window.open(href, '_blank').focus();
    }
  },
  computed: {
    mob(){
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    user-select: none;
    touch-action: manipulation;
    outline: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  body {
    margin: 0px
  }

  .wrap {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

  }

  .line {
    position: absolute;
    width: 1px;
    height: 100vh;
    top: 0px;
    left: 50%;
    background: black;
  }

  .nav {
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    width: 100%;

    div {
      position: relative;
      padding: 7px 20px;
      background: #FFFFFF;
      border: 1px solid #000000;
      border-radius: 36px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin: 0px 10px;
      color: #000000;
      cursor: pointer;
    }
  }

  .note {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 75px;
    line-height: 116px;
    color: #000000;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 15%;
}

.cents {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    line-height: 116px;
    color: #8c8c8c;
    position: absolute;
    width: 100%;
    text-align: center;
    top: calc(15% + 75px);
    font-weight: 300;
}

  .start {
    font-size: 24px;
    position: fixed;
    width: 100vw;
    height: 100vh;
    color: white;
    background: #000000de;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.3s;
    z-index: 999;
  }

  .start.error {
    z-index: 999999;
    background: black;
    pointer-events: none;
    font-size: 18px;
  }

  .start.hidden {
    opacity: 0;
    pointer-events: none;
  }

  @media (prefers-color-scheme: dark) {
    .note {
      color: white;
    }

    .cents {
      color: white;
      opacity: 0.6;
    }

    .wrap {
      background: black;
    }

    .nav {
      div {
        color: white;
        background: black;
        border-color: white;
      }
    }
  }
</style>
