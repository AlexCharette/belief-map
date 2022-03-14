import * as Node from '../belief-map.types'


describe('Node', () => {

  let nodes: Node.Node[]

  beforeEach(() => {
    nodes = [
      {
        data: {
          id: '027f6d59-c086-4b11-871b-fdd43eaa5c73',
          name: 'Your Beliefs',
          notes: '',
          references: [],
          type: Node.BeliefType.PersonalConclusion,
          isRoot: true,
          coords: { x: 0, y: 0 } as Node.Coords,
        },
        parents: []
      } as Node.Node,
      {
        data: {
          id: '03f5f39d-0e54-44e8-85db-7716969a1c50',
          name: 'GOD HATES SNITCHES',
          notes: '',
          type: Node.BeliefType.PersonalAssumption,
          references: [],
          isRoot: false,
          coords: { x: 0, y: 0 } as Node.Coords,
        },
        parents: ['027f6d59-c086-4b11-871b-fdd43eaa5c73']
      } as Node.Node,
      {
        data: {
          id: 'f6e8979a-fd58-4ac8-a183-288db6f9013f',
          name: 'The stoics said so',
          notes: 'Whatever',
          references: [],
          type: Node.BeliefType.StatedByAuthority,
          isRoot: false,
          coords: { x: 0, y: 0 } as Node.Coords,
        },
        parents: ['027f6d59-c086-4b11-871b-fdd43eaa5c73', '03f5f39d-0e54-44e8-85db-7716969a1c50']
      } as Node.Node,
    ]
  })

  it('gets a node by ID', () => {
    const lookupId = '027f6d59-c086-4b11-871b-fdd43eaa5c73'
    let node = Node.getNode(lookupId, nodes)
    expect(node.data.id).toEqual(lookupId)
  })

  it('gets a node\'s children', () => {
    const lookupId = '027f6d59-c086-4b11-871b-fdd43eaa5c73'
    let children = Node.getNodeChildren(lookupId, nodes)
    expect(children.length).toEqual(2)
    expect(children[0].parents.includes(lookupId)).toBeTruthy()
  })

  it('gets a node\s coordinates', () => {
    const lookupId = '027f6d59-c086-4b11-871b-fdd43eaa5c73'
    let coords = Node.getNodeCoords(lookupId, nodes)
    expect(coords.x).toEqual(0)
    expect(coords.y).toEqual(0)
  })

  it('gets a node\s parents', () => {
    const lookupId = 'f6e8979a-fd58-4ac8-a183-288db6f9013f'
    const parentId = '027f6d59-c086-4b11-871b-fdd43eaa5c73'
    let parents = Node.getNodeParents(lookupId, nodes)
    expect(parents.length).toEqual(2)
    expect(parents.includes(parentId)).toBeTruthy()
  })

  it('adds parents to a node', () => {
    const newParents = ['abcdefg', '1234567']
    Node.addNodeParents(newParents, [nodes[0]])
    expect(nodes[0].parents.length).toEqual(2)
    expect(nodes[0].parents.includes(newParents[0])).toBeTruthy()
  })

  it('removes a parent from nodes', () => {
    const parentId = '027f6d59-c086-4b11-871b-fdd43eaa5c73'
    Node.removeParentFromNodes(parentId, [nodes[1], nodes[2]])
    expect(nodes[1].parents.includes(parentId)).toBeFalsy()
    expect(nodes[2].parents.includes(parentId)).toBeFalsy()
  })

  it('removes a node', () => {
    const lookupId = '03f5f39d-0e54-44e8-85db-7716969a1c50'
    const previousLength = nodes.length
    nodes = Node.removeNode(lookupId, nodes)
    expect(nodes.length).toEqual(previousLength - 1)
  })

  it('does not remove the node if it is root', () => {
    const lookupId = '027f6d59-c086-4b11-871b-fdd43eaa5c73'
    const previousLength = nodes.length
    expect(() => {
      Node.removeNode(lookupId, nodes)
    }).toThrow('Cannot remove root node')
  })
})