import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './searchengine.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `DATASOURCE::SearchEngine::Instances`
 */
export interface InstancesProps {
    /**
     * Property instanceId: The ID of instance
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::SearchEngine::Instances`
 */
export declare class Instances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::SearchEngine::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
