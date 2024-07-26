module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        firstname: {type: DataTypes.STRING},
        lastname: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: 'user'},
        balance: {type: DataTypes.FLOAT, defaultValue: 0},
        currency: {type: DataTypes.STRING},
        dialcode: {type: DataTypes.STRING},
        phone: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
        resetcode: {type: DataTypes.STRING, allowNull: true},
        status: {type: DataTypes.STRING, defaultValue: 'offline'},
        pin: {type: DataTypes.STRING, allowNull: true},
        refid: {type: DataTypes.STRING, allowNull: true},
        upline: {type: DataTypes.STRING, allowNull: true},
        verified: {type: DataTypes.STRING, defaultValue: 'false'},
        suspended: {type: DataTypes.STRING, defaultValue: 'false'},
        lastlogin: {type: DataTypes.STRING, allowNull: true},
        accountnumber: {type: DataTypes.STRING, allowNull: true},
        country: {type: DataTypes.STRING, allowNull: true},
        state: {type: DataTypes.STRING, allowNull: true},
    })
}