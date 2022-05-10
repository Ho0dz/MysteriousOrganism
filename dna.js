// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
    }
    this.dna[randIndex] = newBase;
    return this.dna;
  },
  compareDNA(otherOrg) {
    const similarities = this.dna.reduce((acc, curr, idx, arr) => {
      if (arr[idx] === otherOrg.dna[idx]) {
        return acc + 1;
      } else {
        return acc;
      } 
      }, 0);
      const percentofDNAshared = (similarities / this.dna.length) * 100
      const percentageTo2Deci = percentofDNAshared.toFixed(2);
      console.log(`${this.specimanNum} and ${other.Org.specimanNum} have ${percentageTo2Deci}% DNA in common`);
  },
  willLikelySurvive() {
    const cOrG = this.dna.filter(el => el === "C" || el === "G");
return cOrG.length / this.dna.length >= 0.6;  
},
}
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)


// returns 

***[ { specimanNum: 4,
    dna: [ 'C', 'A', 'C', 'A', 'C', 'T', 'C', 'C', 'C', 'C', 'A', 'C', 'A', 'C', 'T' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 10,
    dna: [ 'C', 'T', 'T', 'T', 'T', 'G', 'T', 'C', 'C', 'C', 'G', 'G', 'A', 'C', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 14,
    dna: [ 'G', 'G', 'C', 'T', 'C', 'A', 'C', 'C', 'C', 'G', 'A', 'G', 'G', 'T', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 16,
    dna: [ 'C', 'A', 'G', 'A', 'C', 'G', 'C', 'A', 'C', 'T', 'A', 'G', 'C', 'C', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 20,
    dna: [ 'T', 'A', 'T', 'C', 'C', 'G', 'T', 'G', 'T', 'C', 'C', 'C', 'G', 'T', 'G' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 25,
    dna: [ 'G', 'G', 'G', 'G', 'A', 'G', 'T', 'T', 'C', 'G', 'T', 'C', 'C', 'C', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 31,
    dna: [ 'A', 'G', 'G', 'C', 'C', 'G', 'G', 'T', 'C', 'G', 'C', 'G', 'G', 'C', 'A' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 32,
    dna: [ 'A', 'C', 'C', 'T', 'C', 'A', 'G', 'C', 'T', 'A', 'T', 'G', 'G', 'G', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 35,
    dna: [ 'G', 'T', 'C', 'G', 'C', 'G', 'C', 'C', 'C', 'T', 'T', 'C', 'T', 'C', 'T' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 43,
    dna: [ 'A', 'T', 'G', 'G', 'C', 'G', 'C', 'A', 'T', 'C', 'T', 'C', 'C', 'C', 'A' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 47,
    dna: [ 'G', 'G', 'G', 'A', 'A', 'G', 'G', 'A', 'T', 'C', 'T', 'C', 'C', 'A', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 48,
    dna: [ 'A', 'T', 'A', 'C', 'G', 'G', 'G', 'C', 'A', 'C', 'A', 'A', 'G', 'C', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 52,
    dna: [ 'C', 'A', 'G', 'A', 'G', 'C', 'C', 'G', 'C', 'A', 'C', 'A', 'C', 'T', 'A' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 53,
    dna: [ 'G', 'T', 'G', 'G', 'T', 'C', 'G', 'C', 'A', 'T', 'G', 'C', 'A', 'G', 'G' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 54,
    dna: [ 'C', 'G', 'C', 'G', 'C', 'T', 'G', 'A', 'G', 'C', 'T', 'G', 'A', 'C', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 59,
    dna: [ 'A', 'G', 'G', 'C', 'G', 'T', 'A', 'C', 'G', 'A', 'G', 'G', 'T', 'A', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 60,
    dna: [ 'C', 'G', 'G', 'C', 'A', 'C', 'A', 'T', 'G', 'A', 'C', 'A', 'T', 'C', 'G' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 61,
    dna: [ 'C', 'T', 'C', 'C', 'A', 'C', 'A', 'C', 'G', 'G', 'C', 'T', 'A', 'G', 'T' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 66,
    dna: [ 'A', 'C', 'C', 'C', 'C', 'G', 'G', 'C', 'C', 'G', 'T', 'C', 'C', 'A', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 69,
    dna: [ 'C', 'A', 'A', 'C', 'G', 'G', 'T', 'A', 'G', 'G', 'G', 'G', 'C', 'G', 'A' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 71,
    dna: [ 'A', 'C', 'A', 'T', 'G', 'G', 'C', 'G', 'G', 'A', 'T', 'C', 'T', 'G', 'G' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 72,
    dna: [ 'T', 'A', 'A', 'G', 'C', 'C', 'G', 'A', 'T', 'G', 'A', 'G', 'C', 'C', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 73,
    dna: [ 'G', 'C', 'A', 'A', 'C', 'T', 'C', 'G', 'G', 'G', 'A', 'A', 'G', 'C', 'G' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 77,
    dna: [ 'C', 'C', 'G', 'A', 'G', 'G', 'T', 'T', 'C', 'T', 'C', 'C', 'T', 'C', 'T' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 79,
    dna: [ 'G', 'C', 'T', 'C', 'A', 'T', 'C', 'C', 'T', 'G', 'C', 'G', 'G', 'C', 'T' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 80,
    dna: [ 'C', 'G', 'C', 'T', 'C', 'G', 'A', 'G', 'G', 'A', 'G', 'G', 'T', 'A', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 81,
    dna: [ 'C', 'G', 'A', 'T', 'C', 'A', 'C', 'G', 'G', 'G', 'C', 'T', 'C', 'G', 'G' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 83,
    dna: [ 'C', 'T', 'C', 'C', 'A', 'G', 'T', 'A', 'C', 'G', 'C', 'T', 'G', 'A', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 86,
    dna: [ 'G', 'A', 'A', 'T', 'C', 'A', 'C', 'C', 'T', 'T', 'C', 'C', 'G', 'G', 'G' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] },
  { specimanNum: 87,
    dna: [ 'G', 'A', 'T', 'C', 'A', 'C', 'G', 'T', 'C', 'A', 'C', 'G', 'G', 'C', 'C' ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive] } ]
