class MySqlAdapter {
  constructor() {
    this.dbConnection = () => {
      console.log('MySQL connected!');
    };
  }
}

export default MySqlAdapter;
