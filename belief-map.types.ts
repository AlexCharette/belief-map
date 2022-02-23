import { lookup } from "dns"

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

export interface Coords {
  x: number,
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
  parents: string[],
}

export interface NodeData {
  id: string,
  name: string,
  notes: string,
  type: BeliefType,
  references: BeliefReference[],
  isRoot: boolean,
  coords: Coords,
}

export interface Node {
  data: NodeData,
  children: Node[],
  parents: string[],
}

export interface Link {
  parent: Node,
  child: Node,
}

export function getNodeChildren(lookupId: string, nodes: Node[]): Node[] {
  let children = nodes.filter((node: Node) => node.parents.includes(lookupId))
  return children
}

export function getNodeCoords(lookupId: string, nodes: Node[]): Coords {
  // Get data
  let data = nodes.map((node: Node) => node.data)
  let found = data.find(({ id }) => id === lookupId)
  // Return coords
  return found!.coords
}

export function getNodeParents(lookupId: string, nodes: Node[]): string[] {
  return nodes
    .filter((node: Node) => node.data.id == lookupId)
    .map((node: Node) => node.parents)[0]
}

export function addNodeParents(newParents: string[], nodes: Node[]) {
  nodes.forEach((node: Node) => node.parents.concat(newParents))
}

export function removeNodeParent(parentId: string, nodes: Node[]) {
  // TODO not sure how to do this
}