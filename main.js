// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//steps 3 and 4
function pAequorFactory(num, arr) {
  return {
    specimenNum : num,
    dna: arr,

    mutate() {
      let mutation = returnRandBase();
      let index = Math.floor(Math.random() * 15);

      while (mutation === this.dna[index]) {
        mutation = returnRandBase();
      }

      this.dna[index] = '(' + mutation + ')';
    },

    //step 5
    compareDNA (obj) {
      let counter = 0;
      for (let i = 0; i < obj.dna.length; i++) {
        if (obj.dna[i] === this.dna[i]) {
          counter += 1;
        }
      }
      let percentDiff = ((this.dna.length) - counter)/this.dna.length;
      console.log(`Organisms ${this.specimenNum} and ${obj.specimenNum} have ${percentDiff} of their DNA in common.`)

    },

    //step 6
    willLikelySurvive() {
      let countC = 0;
      let countG = 0;
      let answer;

      this.dna.forEach(element => {
        if (element === 'C') {
          countC++;
        }else if (element === 'G') {
          countG++;
        }
      })

      let total = countC + countG;
      if (total/this.dna >= 0.6) {
        answer = true;
      }else {
        answer = false;
      }

      return answer
    }

}
}

// let org1 = pAequorFactory(1, mockUpStrand())
// console.log(org1)

let arr = [];
for (let index = 0; index < 31; index++) {
  arr.push(pAequorFactory(index, mockUpStrand()))
}

console.log(arr[5].compareDNA(arr[27]))