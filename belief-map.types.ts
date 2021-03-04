
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

export interface Segment {
  type: BeliefType,
  count: number,
  colour: string,
}

export interface CircleData {
  x: number,
  y: number,
  radius: number,
}

export interface NodeData {
  id: string,
  name: string,
  notes: string,
  type: BeliefType,
  references: BeliefReference[], // TODO define this
}

export interface Node {
  data: NodeData,
  children: Array<Node>,
}