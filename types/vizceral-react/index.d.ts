// Type definitions for Netflix Vizceral-React
// Project: 
// Definitions by: Timmon Pham <>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface VizceralMetrics {
    normal: number
    danger?: number
    warning?: number
}

export interface VizceralConnection {
    source: string
    target: string
    metadata?: object
    metrics?: VizceralMetrics
    notices?: any[]
    class?: 'normal'
}

export interface VizceralNode {
    name: string
    renderer: 'global' | 'region' | 'focusedChild'
    displayName?: string
    node_type?: 'service' | 'storage' | 'user'
    updated?: number
    nodes?: VizceralNode[]
    metadata?: object
    class?: string
    connections?: VizceralConnection[]
    maxVolume?: number
    props?: object
    serverUpdateTime?: number
}

export interface VizceralProps {
    traffic: object
    targetFramerate?: any
    styles?: any
    viewChanged?: any
    objectHighlighted?: any
    objectHovered?: any
    nodeUpdated?: any
    nodeContextSizeChanged?: any
    matchesFound?: any
    viewUpdated?: any
    allowDraggingOfNodes?: boolean
    showLabels?: any
    filters?: any
    definitions?: any
    view?: any
    connectionHighlighted?: () => void
    match?: string
    nodeHighlighted?: () => void
    objectToHighlight?: any
}
export interface VizceralState {
}

export default class Vizceral extends React.Component<VizceralProps, VizceralState> {
    constructor(props: VizceralProps);
    animationEnd: () => void;
    render(): JSX.Element;
}