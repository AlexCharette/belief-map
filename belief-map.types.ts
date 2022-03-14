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

/** 
 * Returns a node
 * @param {string} lookupId The id of the node we want
 * @param {Node[]} nodes The list of nodes to search
*/
export function getNode(lookupId: string, nodes: Node[]): Node {
  let node = nodes.filter((node: Node) => node.data.id == lookupId)[0]
  return node
}

/** 
 * Returns the children of a given node
 * @param {string} lookupId The id of the node whose children we want
 * @param {Node[]} nodes The list of nodes to search
*/
export function getNodeChildren(lookupId: string, nodes: Node[]): Node[] {
  let children = nodes.filter((node: Node) => node.parents.includes(lookupId))
  return children
}

/** 
 * Returns the coordinates of a given node
 * @param {string} lookupId The id of the node whose coordinates we want
 * @param {Node[]} nodes The list of nodes to search
*/
export function getNodeCoords(lookupId: string, nodes: Node[]): Coords {
  // Get data
  let data = nodes.map((node: Node) => node.data)
  let found = data.find(({ id }) => id === lookupId)
  // Return coords
  return found!.coords
}

/** 
 * Returns the parents of a given node
 * @param {string} lookupId The id of the node whose parents we want
 * @param {Node[]} nodes The list of nodes to search
*/
export function getNodeParents(lookupId: string, nodes: Node[]): string[] {
  return nodes
    .filter((node: Node) => node.data.id == lookupId)
    .map((node: Node) => node.parents)[0]
}

/** 
 * Adds parents to a given node
 * @param {string[]} newParents The list of parents we want to add
 * @param {Node[]} nodes The list of nodes to which the parents will be added
*/
export function addNodeParents(newParents: string[], nodes: Node[]) {
  nodes.forEach((node: Node) => node.parents.concat(newParents))
}

/** 
 * Removes a parent from a list of nodes
 * @param {string} parentId The id of the parent we want to remove
 * @param {Node[]} nodes The list of nodes to remove the parent from
*/
export function removeParentFromNodes(parentId: string, nodes: Node[]) {
  nodes.forEach(
    (node: Node) => {
      node.parents = node.parents.filter((parent: string) => parent != parentId) 
    }
  )
}

/** 
 * Removes a node from a given list
 * @param {string} lookupId The id of the node we want to remove
 * @param {Node[]} nodes The list of nodes to remove the node from
*/
export function removeNode(lookupId: string, nodes: Node[]) {
  return nodes.filter((node: Node) => node.data.id != lookupId)
}