export const formatPrice = (price: number) => {
  return price
    .toLocaleString("fr-FR", {
      style: "currency",
      currency: "xof",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace("FCFA", "FCFA")
    .trim(); // Retirer l'espace ajouté automatiquement
};
