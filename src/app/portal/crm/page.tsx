import React from 'react';
import { Metadata } from 'next';
import CrmClient from './CrmClient';

export const metadata: Metadata = {
  title: 'Operations Hub | IGAC MUN',
  description: 'Internal Delegate CRM and Registry.',
};

export default async function CrmPage() {
  return <CrmClient />;
}