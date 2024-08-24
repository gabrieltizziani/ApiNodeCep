module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '280305',
    database: 'api-node',
    define: {
      timestamps: true,
      underscored: true
    }
  },
  test: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '280305',
    database: 'api-node_test',
    define: {
      timestamps: true,
      underscored: true
    }
  },
  production: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '280305',
    database: 'api-node_production',
    define: {
      timestamps: true,
      underscored: true
    }
  }
};
