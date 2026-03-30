function calculerTotal(prix) {
    if (prix > 100) {
        return prix * 0.8; // Applique une réduction de 20% pour les prix supérieurs à 100
    }
    return prix;
}
module.exports = calculerTotal;
