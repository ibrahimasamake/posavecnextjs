import jsPDF from "jspdf";
import "jspdf-autotable";

export const formatPrice = (price: number): string => {
  return price
    .toLocaleString("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace("FCFA", "FCFA")
    .trim(); // Retirer l'espace ajouté automatiquement
};

type ClientPos = {
  nom: string;
  prenom: string;
  numero: string;
};

type Product = {
  id: number;
  quantite: number;
  image: string;
  prix: number;
  name: string;
};

export function createInvoice(
  client: ClientPos | null,
  finalProduits: Product[],
  total: number
): void {
  const doc = new jsPDF();

  // Définir les styles globaux
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 40);
  doc.text("SAM INFORMATIQUE MALI", 14, 20);

  // Ajouter le header avec les informations de l'entreprise
  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");
  doc.text("Sam Informatique Mali", 14, 30);
  doc.text("PDG: Ibrahima Samake", 14, 36);
  doc.text("Numéro: 74171794", 14, 42);

  // Générer la date et le numéro de la facture
  const date = new Date().toLocaleDateString();
  const invoiceNumber = `INV-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`;

  // Ajouter les informations de la facture
  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");
  doc.text(`Date: ${date}`, 120, 20);
  doc.text(`Facture N°: ${invoiceNumber}`, 120, 26);

  // Ajouter les informations du client
  if (client) {
    doc.text(`Client: ${client.nom} ${client.prenom}`, 120, 36);
    doc.text(`Numéro: ${client.numero}`, 120, 42);
  } else {
    doc.text("Client: inconnu", 120, 36);
  }

  // Ajouter les produits dans un tableau
  const productsTable = finalProduits.map((product, index) => [
    index + 1,
    product.name,
    product.quantite,
    product.prix * product.quantite,
  ]);

  doc.autoTable({
    head: [["#", "Produit", "Quantité", "Prix Total (FCFA)"]],
    body: productsTable,
    startY: 50,
    theme: "grid",
    headStyles: { fillColor: [22, 160, 133] }, // Couleur de l'en-tête
    alternateRowStyles: { fillColor: [240, 240, 240] }, // Couleur des lignes alternées
    styles: {
      font: "Helvetica",
      fontSize: 10,
      textColor: [40, 40, 40],
    },
    margin: { top: 50 },
  });

  // Ajouter le total avec un fond moderne
  const finalY = (doc as any).lastAutoTable.finalY || 70; // Utiliser la position de fin de la table
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255); // Couleur du texte en blanc
  doc.setFillColor(255, 98, 79); // Couleur de fond en rouge orangé
  doc.rect(14, finalY + 8, 182, 12, "F"); // Rectangle pour le fond
  doc.text(`Total = ${total} FCFA`, 120, finalY + 15); // Texte du total

  // Ajouter un pied de page
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text("Merci pour votre achat!", 14, finalY + 25);

  // Sauvegarder le PDF
  doc.save("facture.pdf");
}
