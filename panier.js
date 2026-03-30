function calculerTotal(prix) {
    if (prix > 100) {
        return prix * 0.8; // Appliquer une réduction de 20%
    }
    return prix;
}
module.exports = calculerTotal;
