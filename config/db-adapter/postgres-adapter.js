class PostegresAdapter {
  constructor() {
    this.dbConnection = () => {
      console.log('MySQL connected!');
    };
  }
}

export default PostegresAdapter;
