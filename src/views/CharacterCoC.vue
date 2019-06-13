<template lang="pug">
  v-container
    v-layout(row)
      v-flex(xs4) {{ character.name }}
      v-flex(xs2) {{ character.age }}
      v-flex(xs2) {{ character.sex }}
      v-flex(xs4) 職業: {{ character.job }}
    v-layout(row wrap)
      v-flex(xs3 v-for="status in status_list")
        span.status_name {{ status.name }}
        span.status_value : {{ status.value }}
      v-flex(xs3)
        span.status_name アイデア
        span.status_value : {{ Idea }}
      v-flex(xs3)
        span.status_name 幸運
        span.status_value : {{ Luck }}
      v-flex(xs3)
        span.status_name 知識
        span.status_value : {{ Knowledge }}
    v-layout(row wrap)
      v-flex(xs3)
        .status HP: {{ maxHP }}
      v-flex(xs3)
        .status MP: {{ maxMP }}
      v-flex(xs3)
        .status SAN: {{ SAN }}
</template>

<script>
export default {
  data() {
    return {
      character: {
        name: "Yamada",
        age: "28",
        sex: "男",
        job: "探偵"
      },
      status_list: [
        {
          name: "STR", // 0
          value: this.get3D6()
        },
        {
          name: "CON", // 1
          value: this.get3D6()
        },
        {
          name: "POW", // 2
          value: this.get3D6()
        },
        {
          name: "DEX", // 3
          value: this.get3D6()
        },
        {
          name: "APP", // 4
          value: this.get3D6()
        },
        {
          name: "SIZ", // 5
          value: this.get3D6()
        },
        {
          name: "INT", // 6
          value: this.get2D6() + 6
        },
        {
          name: "EDU", // 7
          value: this.get3D6() + 3
        }
      ]
    };
  },

  computed: {
    // 配列番号での指定は引用のみで有効．編集時は要spliceメソッド．

    // 副次ステータス
    Idea: function() {
      return this.status_list[6].value * 5;
    },
    Luck: function() {
      return this.status_list[2].value * 5;
    },
    Knowledge: function() {
      return this.status_list[7].value * 5;
    },
    maxHP: function() {
      return Math.floor(
        (this.status_list[1].value + this.status_list[5].value) / 2
      );
    },
    maxMP: function() {
      return this.status_list[2].value;
    },
    SAN: function() {
      return this.status_list[2].value * 5;
    }

    // 技能
    // もし79以上なら，EDU21のとき99を超えるため除外
    // もし82以上なら．INT18のとき99を超えるため除外
    // 探偵：職業技能「言いくるめ，鍵開け，心理学，追跡，図書館，法律，目星，（1：聞き耳，写真術，値切り，こぶし／パンチ）」
  },

  methods: {
    // URLを発行する
    get2D6() {
      return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
    },
    get3D6() {
      return (
        Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1)
      );
    },
    get1D100() {
      return Math.floor(Math.random() * 100 + 1);
    }
  }
};
</script>