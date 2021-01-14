class Friend {
  constructor(count, friends) {
    this.count = count;
    this.friends = friends;
  }

  getCount() {
    if(this.friends.length) {
      return this.friends.reduce((result, friend) => result + friend.getCount(),
       this.count 
      )
    }
    return this.count
  }
}