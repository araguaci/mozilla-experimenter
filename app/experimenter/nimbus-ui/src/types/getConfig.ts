/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NimbusExperimentApplication } from "./globalTypes";

// ====================================================
// GraphQL query operation: getConfig
// ====================================================

export interface getConfig_nimbusConfig_application {
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_channel {
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_featureConfig {
  id: number | null;
  name: string;
  slug: string;
  description: string | null;
  application: NimbusExperimentApplication | null;
  ownerEmail: string | null;
  schema: string | null;
}

export interface getConfig_nimbusConfig_firefoxMinVersion {
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_outcomes {
  friendlyName: string | null;
  slug: string | null;
  application: NimbusExperimentApplication | null;
  description: string | null;
}

export interface getConfig_nimbusConfig_targetingConfigSlug {
  label: string | null;
  value: string | null;
  applicationValues: (string | null)[] | null;
}

export interface getConfig_nimbusConfig_documentationLink {
  label: string | null;
  value: string | null;
}

export interface getConfig_nimbusConfig_locales {
  code: string | null;
  name: string | null;
}

export interface getConfig_nimbusConfig_countries {
  code: string | null;
  name: string | null;
}

export interface getConfig_nimbusConfig {
  application: (getConfig_nimbusConfig_application | null)[] | null;
  channel: (getConfig_nimbusConfig_channel | null)[] | null;
  featureConfig: (getConfig_nimbusConfig_featureConfig | null)[] | null;
  firefoxMinVersion: (getConfig_nimbusConfig_firefoxMinVersion | null)[] | null;
  outcomes: (getConfig_nimbusConfig_outcomes | null)[] | null;
  targetingConfigSlug: (getConfig_nimbusConfig_targetingConfigSlug | null)[] | null;
  hypothesisDefault: string | null;
  documentationLink: (getConfig_nimbusConfig_documentationLink | null)[] | null;
  maxPrimaryOutcomes: number | null;
  locales: (getConfig_nimbusConfig_locales | null)[] | null;
  countries: (getConfig_nimbusConfig_countries | null)[] | null;
}

export interface getConfig {
  nimbusConfig: getConfig_nimbusConfig | null;
}
