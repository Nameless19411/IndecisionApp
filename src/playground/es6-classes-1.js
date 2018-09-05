class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreetting() {
    return `Hi. I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()
    
    if (this.hasMajor()) {
      description += ` ${this.name}'s major is ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreetting() {
    let description = super.getGreetting()

    if (!!this.homeLocation) {
      description += ` I'm visiting from ${this.homeLocation}.`
    }

    return description
  }
}

const me = new Student('Kerk L', 24, 'Computer Engineering')
console.log(me.getDescription())

const other = new Student()
console.log(other.getDescription())

const me2 = new Traveler('Kaew', 23, 'Bangkok, Thailand')
console.log(me2.getGreetting())

const other2 = new Traveler()
console.log(other2.getGreetting())