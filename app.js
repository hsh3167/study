new Vue({
    el: '#app',
    data: {
        mychoice: null,
        comchoice: null,
        count: 3,
        winner:null,
        lifeofme: 3,
        lifeofcom: 3,
        isselectable: true,
        logs: []
    },
    watch:{
        count: function(newval){


        if(newval==0){
            let number = Math.random()
            if(number <0.33)
            {
              this.comchoice = 'scissor'
            }
            else if(number < 0.66)
            {
               this.comchoice = 'rock'
            }
            else{
               this.comchoice = 'paper'
            }

            //가위바위보 승패 결정
            if(this.mychoice == this.comchoice) this.winner = 'No one'
           else if(this.mychoice == 'rock' && this.comchoice == 'scissor') this.winner ='Me'
           else if(this.mychoice == 'rock' && this.comchoice == 'paper') this.winner ='Computer'

           else if(this.mychoice == 'scissor'&& this.comchoice =='paper') this.winner = 'Me'
           else if(this.mychoice == 'scissor'&& this.comchoice =='rock') this.winner = 'Computer'

           else if(this.mychoice == 'paper' && this.comchoice == 'scissor') this.winner = 'Me'
           else if(this.mychoice == 'paper' && this.comchoice == 'rock') this.winner = 'Computer'
           else this.winner ='error'
           
           //몫 차감

           if(this.winner == 'Me') this.lifeofcom --
           else if(this.winner == 'Computer') this.lifeofme --

           //리셋
           this.count = 3
           this.isselectable=true

           let log = {
           message: 'You:'+ this.mychoice+'    Computer:'+ this.comchoice,
           winner: this.winner
           }
           this.logs.unshift(log)

        }
        },

        lifeofme: function(newval){
          if(newval == 0)
          {
              setTimeout(() => { 
            confirm('안타깝네요, 당신이 패배하였습니다.')
            this.lifeofme = 3
            this.lifeofcom = 3
            this.mychoice = null
            this.comchoice = null
            this.winner = null
            this.logs = []
             }, 500);
          }
        },
        lifeofcom: function(newval){
           if(newval == 0)
           {
            setTimeout(() => {
                confirm('축하드립니다, 당신이 승리하였습니다.')
               this.lifeofme = 3
                this.lifeofcom = 3
                this.mychoice = null
                this.comchoice = null
                this.winner = null
                this.logs = []
                 }, 500);
           }
        },
    },
    methods: {
        startGame:function(){
            this.isselectable = false
            if(this.mychoice == null){
            alert('가위,바위,보 중 하나를 선택해 주세요!')
            this.isselectable=true
            }
            else
            {
            let countDown= setInterval(()=>{this.count--
            if(this.count == 0)
            {
                clearInterval(countDown)
            }
            }, 1000)
            }
        }
    }
})