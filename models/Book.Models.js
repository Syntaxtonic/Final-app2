module.exports = mongoose => {
    var products = mongoose.Schema({
        title: String,
        description: String,
        category: String,
        image: {
            type: String,
            default: `
             https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg
            `
        },
        quantity:{
            type: Number,
            defaul: 1
        },
        status: {
            type: Boolean,
            default: false
        }
    }, {timestamps: true});
    products.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    const Product = mongoose.model("books", products)
    return Product;
}