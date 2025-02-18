import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroups } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVServerGroups as VServerGroupsProperty };

/**
 * Properties for defining a `DATASOURCE::SLB::VServerGroups`
 */
export interface VServerGroupsProps {

    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::SLB::VServerGroups`
 */
export class VServerGroups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute VServerGroupIds: The list of VServer group IDs.
     */
    public readonly attrVServerGroupIds: ros.IResolvable;

    /**
     * Attribute VServerGroups: The list of VServer groups.
     */
    public readonly attrVServerGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::SLB::VServerGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVServerGroups = new RosVServerGroups(this, id,  {
            loadBalancerId: props.loadBalancerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVServerGroups;
        this.attrVServerGroupIds = rosVServerGroups.attrVServerGroupIds;
        this.attrVServerGroups = rosVServerGroups.attrVServerGroups;
    }
}
