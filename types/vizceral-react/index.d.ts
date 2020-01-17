// Type definitions for Netflix Vizceral-React
// Project: 
// Definitions by: Timmon Pham <>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface VizceralMetrics {
    readonly normal: number
    readonly danger?: number
    readonly warning?: number
}

export interface VizceralConnection {
    readonly source: string
    readonly target: string
    readonly metadata?: object
    readonly metrics?: VizceralMetrics
    readonly notices?: any[]
    readonly class?: 'normal'
}

export interface VizceralNode {
    readonly name: string
    readonly renderer: 'global' | 'region' | 'focusedChild'
    readonly displayName?: string
    readonly node_type?: 'service' | 'storage' | 'user'
    readonly updated?: number
    readonly nodes?: VizceralNode[]
    readonly metadata?: object
    readonly class?: string
    readonly connections?: VizceralConnection[]
    readonly maxVolume?: number
    readonly props?: object
    readonly serverUpdateTime?: number
}

export interface VizceralProps {
    readonly traffic: object
    readonly targetFramerate?: any
    readonly styles?: any
    readonly viewChanged?: any
    readonly objectHighlighted?: any
    readonly objectHovered?: any
    readonly nodeUpdated?: any
    readonly nodeContextSizeChanged?: any
    readonly matchesFound?: any
    readonly viewUpdated?: any
    readonly allowDraggingOfNodes?: boolean
    readonly showLabels?: any
    readonly filters?: any
    readonly definitions?: any
    readonly view?: any
    readonly connectionHighlighted?: () => void
    readonly match?: string
    readonly nodeHighlighted?: () => void
    readonly objectToHighlight?: any
}

export interface VizceralState {
}

export default class Vizceral extends React.Component<VizceralProps, VizceralState> {
    constructor(props: VizceralProps);
    animationEnd: () => void;
    render(): JSX.Element;
}