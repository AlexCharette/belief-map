
export enum BeliefType {
  ScientificEvidence = "scientificEvidence",
  Observation = "observation",
  PersonalConclusion = "personalConclusion",
  PersonalAssumption = "personalAssumption",
  ReligiousThinking = "religiousThinking",
  StatedByAuthority = "statedByAuthority",
  UnableToDisprove = "unableToDisprove", 
}

export interface BeliefReference {
  text: string,
  link: string,
}

export interface BezierData {
  parentHeight: number,
  halfSize: number,
  radius: number,
  y: number,
}

export interface CircleData {
  x: number,
  y: number,
  radius: number,
}

export interface Segment {
  type: BeliefType,
  count: number,
  colour: string,
}

// TODO is this necessary?
export interface JsonNode {
  id: string,
  name: string,
  notes: string,
  type: string,
  references: any[],
  children: any[],
}

export interface NodeData {
  id: string,
  name: string,
  notes: string,
  type: BeliefType,
  references: BeliefReference[],
  isRoot: boolean,
}

export interface Node {
  id: string,
  name: string,
  notes: string,
  type: BeliefType,
  references: BeliefReference[],
  isRoot: boolean,
  children: Node[],
}