import qmsCertificateFile from "./assets/SB ENGINEERING SERVICES QMS (1).pdf";
import qmsCertificateImage from "./assets/iso_9001_certificate.jpg";
import udyogAadhaarFile from "./assets/SB ENGINEERING SERVICES certficate.jpeg";

export interface CompanyDocument {
  id: string;
  title: string;
  issuer: string;
  /** Drives how the document is previewed when its panel is expanded. */
  kind: "pdf" | "image";
  file: string;
  fileLabel: string;
  /** Full-page render shown inline, so the document is legible on every device. */
  preview: string;
  summary: string;
  facts: { label: string; value: string }[];
}

/**
 * Statutory and certification documents published on the Company Profile page.
 * Every value below is transcribed from the document it belongs to.
 */
export const companyDocuments: CompanyDocument[] = [
  {
    id: "iso-9001-2015",
    title: "ISO 9001:2015 Management System Certificate",
    issuer: "Royal Assessments Pvt. Ltd. (RAPL)",
    kind: "pdf",
    file: qmsCertificateFile,
    fileLabel: "PDF",
    preview: qmsCertificateImage,
    summary:
      "S. B. Engineering Services has been assessed by RAPL and found to comply with the requirements of ISO 9001:2015 Quality Management Systems.",
    facts: [
      { label: "Certificate Number", value: "E20250421497" },
      { label: "Date of Certification", value: "08 / 04 / 2025" },
      { label: "Surveillance Status", value: "1st surveillance audit successfully conducted" },
      { label: "2nd Surveillance", value: "On or before 07 / 04 / 2027" },
      { label: "Valid Until", value: "07 / 04 / 2028" },
      { label: "Accreditation", value: "EGAC — QMS Certification CAB# 119012, IAF MLA signatory" }
    ]
  },
  {
    id: "udyog-aadhaar",
    title: "Udyog Aadhaar (MSME) Registration Certificate",
    issuer: "Ministry of Micro, Small & Medium Enterprises, Government of India",
    kind: "image",
    file: udyogAadhaarFile,
    fileLabel: "JPEG",
    preview: udyogAadhaarFile,
    summary:
      "Udyog Aadhaar registration of M/S S B Engineering Services under the Ministry of Micro, Small & Medium Enterprises.",
    facts: [
      { label: "Udyog Aadhaar Number", value: "WB10D0037111" },
      { label: "Name of Enterprise", value: "M/S S B Engineering Services" },
      { label: "Enterprise Type", value: "Micro — Services" },
      { label: "Date of Commencement", value: "01 / 04 / 2015" },
      { label: "National Industry Classification", value: "71100 — Architectural and engineering activities and related technical consultancy" },
      { label: "Registered Location", value: "P-25 Senhati Colony, Behala, Kolkata - 700034, West Bengal" }
    ]
  }
];

/** Scope of certification, transcribed from the ISO 9001:2015 certificate. */
export const certifiedScope =
  "Manufacturers and suppliers of electrical, mechanical, electronics and optical products, industrial process control equipments, electric motors, generators, transformers, arc welding transformers, battery chargers, electricity distribution and control apparatus, machineries & equipments, repair, installation & maintenance of industrial machineries and equipments.";

/** Certified address as printed on the ISO 9001:2015 certificate. */
export const certifiedAddress =
  "P-25, Senhati Colony, Behala, South Twenty Four Parganas - 700034, West Bengal, India.";
