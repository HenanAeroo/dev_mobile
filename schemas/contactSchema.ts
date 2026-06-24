// schemas/contactSchema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z.email('Adresse email invalide'),
  phone: z
    .string()
    .regex(/^0[1-9]\d{8}$/, 'Format attendu : 0XXXXXXXXX')
    .optional(),
  role: z.enum(['Designer', 'Developer', 'Manager', 'DevOps'], {
    error: () => 'Sélectionnez un rôle valide',
  }),
});
// Le type est GÉNÉRÉ depuis le schéma
export type ContactFormData = z.infer<typeof contactSchema>;
// ContactFormData = { name: string; email: string; phone?: string; role: 'Designer'
