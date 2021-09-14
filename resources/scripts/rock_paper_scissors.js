class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const randomSelection = Math.floor(Math.random()*3);    

    return acceptedValues[randomSelection];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    const resultString = "";
    if (userSelection === cpuSelection){
      resultString = "tie";
    }else if (userSelection === 'rock' && cpuSelection === 'scissors'){
      resultString = "win";
    }else if (userSelection === 'paper' && cpuSelection === 'rock'){
      resultString = "win";
    }else if (userSelection === 'scissors' && cpuSelection === 'paper'){
      resultString = "win";
    }else{
      resultString = "loose";
    }
    return resultString;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    const cpuPick = this.generateCPUResponse();
    const didWin = this.determineWinner(userSelection, cpuPick);
    const winner = "";

    if(didWin === "win"){
      this.score.user ++;
      winner = this.username;
    }

    if(didWin === "loose"){
      this.score.cpu ++;
      winner = "CPU";
    }

    this.gameHistoryLog.push(this.username + " Selected " + userSelection + ", " + "CPU selected " + cpuPick + ": " + winner + "wins!");

  }

}