<template lang="pug">
#character(ref="screenShot")
  v-container(max-height="fill-height")
    //- 基本情報
    v-layout.my-2(row)
      v-flex(xs4)
        v-text-field(v-model="character.name" label="名前")
      v-flex(xs2)
        v-text-field(v-model="character.age" label="年齢")
      v-flex(xs2)
        v-text-field(v-model="character.sex" label="性別")
      v-flex(xs4)
        .job_name_box.pa-4.ml-4 {{ currentJobName }}
    //- ステータス
    v-layout(row wrap)
      //-: メインステータス
      v-flex(xs8)
        v-layout(row wrap)
          v-flex.pa-1(xs4 v-for="status in status_list")
            v-layout(row)
              v-flex(xs6) {{ status.name }}
              v-flex(xs6) {{ status.value }}
      //-: サブステータス
      v-flex(xs4)
        v-layout(column)
          v-flex.pa-1(xs4)
            v-layout(row)
              v-flex(xs6) アイデア
              v-flex(xs6) {{ Idea }}
          v-flex.pa-1(xs4)
            v-layout(row)
              v-flex(xs6) 幸運
              v-flex(xs6) {{ Luck }}
          v-flex.pa-1(xs4)
            v-layout(row)
              v-flex(xs6)  知識
              v-flex(xs6) {{ Knowledge }}
    //- 可変ステータス
    v-layout.my-2(row wrap)
      v-flex(xs4)
        v-text-field(v-model="currentHP" label="HP")
      v-flex(xs4)
        v-text-field(v-model="currentMP" label="MP")
      v-flex(xs4)
        v-text-field(v-model="currentSAN" label="SAN")
    //- 技能
    v-layout(row wrap)
      v-flex.pa-1(xs6 sm4 v-for="ability in ability_list")
        v-layout(row @click="rollIntoSlack(ability)")
          v-flex.pl-4(xs8 :class="{'yellow--text': ability.value >= 70}") {{ ability.name }}
          v-flex.pr-4(xs4 :class="{'yellow--text': ability.value >= 70}" text-xs-right) {{ ability.value }}
    v-layout.mt-4.py-4(row wrap justify-center text-xs-center)
      v-flex(xs4)
        v-btn(flat fab @click="print")
          v-icon(x-large) assignment_returned
      v-flex(xs4)
        v-btn(flat fab @click="reload")
          v-icon(x-large) replay
</template>

<script>
import { mapState } from "vuex";
import axios from "axios"

export default {
  data() {
    return {
      slackMessage: "",
      screenURL: "",
      character: {
        name: "",
        age: "",
        sex: "",
        job: ""
      },
      status_list: [
        {
          // 0
          name: "STR",
          value: this.get3D6()
        },
        {
          // 1
          name: "DEX",
          value: this.get3D6()
        },
        {
          // 2
          name: "INT",
          value: this.get2D6() + 6
        },
        {
          // 3
          name: "CON",
          value: this.get3D6()
        },
        {
          // 4
          name: "APP",
          value: this.get3D6()
        },
        {
          // 5
          name: "POW",
          value: this.get3D6()
        },
        {
          // 6
          name: "SIZ",
          value: this.get2D6() + 6
        },
        {
          // 7
          name: "EDU",
          value: this.get3D6() + 3
        }
      ]
    };
  },

  computed: {
    // サブステータス
    Idea: function() {
      return this.status_list[2].value * 5;
    },
    Luck: function() {
      return this.status_list[5].value * 5;
    },
    Knowledge: function() {
      return Math.min(this.status_list[7].value * 5, 99);
    },
    currentHP: function() {
      return Math.floor(
        (this.status_list[3].value + this.status_list[6].value) / 2
      );
    },
    currentMP: function() {
      return this.status_list[2].value;
    },
    currentSAN: function() {
      return this.status_list[2].value * 5;
    },

    // 職業技能をVuexから取得
    ...mapState("CoC", ["currentJobName", "currentJobAbilities"]),
    // 技能
    ability_list: function() {
      let abilities = [
        {
          // 0
          name: "言いくるめ",
          value: 5
        },
        {
          // 1
          name: "医学",
          value: 5
        },
        {
          // 2
          name: "運転（自動車）",
          value: 20
        },
        {
          // 3
          name: "応急手当",
          value: 30
        },
        {
          // 4
          name: "オカルト",
          value: 5
        },
        {
          // 5
          name: "回避",
          value: this.status_list[1].value * 2
        },
        {
          // 6
          name: "化学",
          value: 1
        },
        {
          // 7
          name: "鍵開け",
          value: 1
        },
        {
          // 8
          name: "隠す",
          value: 15
        },
        {
          // 9
          name: "隠れる",
          value: 10
        },
        {
          // 10
          name: "機械修理",
          value: 20
        },
        {
          // 11
          name: "聞き耳",
          value: 25
        },
        {
          // 12
          name: "芸術",
          value: 5
        },
        {
          // 13
          name: "経理",
          value: 10
        },
        {
          // 14
          name: "考古学",
          value: 1
        },
        {
          // 15
          name: "コンピュータ",
          value: 1
        },
        {
          // 16
          name: "忍び歩き",
          value: 10
        },
        {
          // 17
          name: "写真術",
          value: 10
        },
        {
          // 18
          name: "重機械操作",
          value: 1
        },
        {
          // 19
          name: "乗馬",
          value: 5
        },
        {
          // 20
          name: "信用",
          value: 15
        },
        {
          // 21
          name: "心理学",
          value: 5
        },
        {
          // 22
          name: "人類学",
          value: 1
        },
        {
          // 23
          name: "水泳",
          value: 25
        },
        {
          // 24
          name: "製作",
          value: 5
        },
        {
          // 25
          name: "精神分析",
          value: 1
        },
        {
          // 26
          name: "生物学",
          value: 1
        },
        {
          // 27
          name: "説得",
          value: 15
        },
        {
          // 28
          name: "操縦",
          value: 1
        },
        {
          // 29
          name: "地質学",
          value: 1
        },
        {
          // 30
          name: "跳躍",
          value: 25
        },
        {
          // 31
          name: "追跡",
          value: 10
        },
        {
          // 32
          name: "電気修理",
          value: 10
        },
        {
          // 33
          name: "電子工学",
          value: 1
        },
        {
          // 34
          name: "天文学",
          value: 1
        },
        {
          // 35
          name: "投擲",
          value: 25
        },
        {
          // 36
          name: "登攀",
          value: 40
        },
        {
          // 37
          name: "図書館",
          value: 25
        },
        {
          // 38
          name: "ナビゲート",
          value: 10
        },
        {
          // 39
          name: "値切り",
          value: 5
        },
        {
          // 40
          name: "博物学",
          value: 10
        },
        {
          // 41
          name: "物理学",
          value: 1
        },
        {
          // 42
          name: "変装",
          value: 1
        },
        {
          // 43
          name: "法律",
          value: 5
        },
        {
          // 44
          name: "ほかの言語",
          value: 1
        },
        {
          // 45
          name: "母国語",
          value: Math.min(this.status_list[7].value * 5, 99)
        },
        {
          // 46
          name: "マーシャルアーツ",
          value: 1
        },
        {
          // 47
          name: "目星",
          value: 25
        },
        {
          // 48
          name: "薬学",
          value: 1
        },
        {
          // 49
          name: "歴史",
          value: 20
        },
        {
          // 50
          name: "拳銃",
          value: 20
        },
        {
          // 51
          name: "キック",
          value: 25
        },
        {
          // 52
          name: "組みつき",
          value: 25
        },
        {
          // 53
          name: "こぶし",
          value: 50
        },
        {
          // 54
          name: "頭突き",
          value: 10
        }
      ];

      // 職業技能割り振り
      const eduP = this.status_list[7].value;
      let tmpArray = [];
      Object.assign(tmpArray, this.currentJobAbilities);
      for (let i = 0; i < 20; i++) {
        let tmpIndex = tmpArray[Math.floor(Math.random() * tmpArray.length)];
        // もし79以上なら，EDU21のとき99を超えるため除外
        if (abilities[tmpIndex].value > 78) {
          i--;
        } else {
          abilities[tmpIndex].value += eduP;
        }
      }

      // 興味技能割り振り
      const intP = this.status_list[2].value;
      for (let i = 0; i < 10; i++) {
        let tmpIndex = Math.floor(Math.random() * 54);
        // もし82以上なら．INT18のとき99を超えるため除外
        if (abilities[tmpIndex].value > 82) {
          i--;
        } else {
          abilities[tmpIndex].value += intP;
        }
      }

      return abilities;
    }
  },

  methods: {
    get2D6() {
      return (
        Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1)
      );
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
    },

    // 1つの関数に複数の機能があるので，必要ならば分離してください
    rollIntoSlack(ability) {
      // 1. 技能ロールの成否を判定
      const dice = this.get1D100()
      const success_bool = (dice <= ability.value) ? true : false
      
      // 2.  IncommingWebhookでSlackに通知を飛ばす
      // 2.a Slack用メッセージの生成
      if (success_bool) {
        this.slackMessage = {
          "atatchments": [
            {
              "fallback": ability.name + ": 成功！",
              "color": "#00FF00",
              "fields": [
                {
                  "title": ability.name + ": 成功！",
                  "value": "1D100 = " + dice + " ≦ " + ability.value
                }
              ]
            }
          ]
        }
      } else {
        this.slackMessage = {
          "atatchments": [
            {
              "fallback": ability.name + ": 失敗！",
              "color": "#D00000",
              "fields": [
                {
                  "title": ability.name + ": 失敗！",
                  "value": "1D100 = " + dice + " ≧ " + ability.value
                }
              ]
            }
          ]
        }
      }
      // 2.b SlackにPOST
      const data = JSON.stringify(this.slackMessage)
      console.log(data)

      axios.post("https://hooks.slack.com/services/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", data)
    },

    // vue-html2canvas を使用，画面全体を画像としてダウンロード
    async print() {
      const el = this.$refs.screenShot;
      const options = {
        type: "dataURL"
      };
      this.screenURL = await this.$html2canvas(el, options);

      let link = document.createElement("a");
      link.href = this.screenURL;
      link.download = "CoCCharacterSheet.png";
      link.click();
    },

    reload() {
      window.location.reload();
    }
  }
};
</script>

<style lang="stylus" scoped>
#character
  background-color indigo
  padding-bottom 10vh
</style>
