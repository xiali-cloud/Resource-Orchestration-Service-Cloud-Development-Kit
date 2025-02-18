import * as ros from '@alicloud/ros-cdk-core';
import { RosStackInstances } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStackInstances as StackInstancesProperty };

/**
 * Properties for defining a `ALIYUN::ROS::StackInstances`
 */
export interface StackInstancesProps {

    /**
     * Property regionIds: undefined
     */
    readonly regionIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property stackGroupName: undefined
     */
    readonly stackGroupName: string | ros.IResolvable;

    /**
     * Property accountIds: undefined
     */
    readonly accountIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property deploymentTargets: undefined
     */
    readonly deploymentTargets?: RosStackInstances.DeploymentTargetsProperty | ros.IResolvable;

    /**
     * Property disableRollback: undefined
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * Property operationDescription: undefined
     */
    readonly operationDescription?: string | ros.IResolvable;

    /**
     * Property operationPreferences: undefined
     */
    readonly operationPreferences?: RosStackInstances.OperationPreferencesProperty | ros.IResolvable;

    /**
     * Property parameterOverrides: undefined
     */
    readonly parameterOverrides?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property retainStacks: undefined
     */
    readonly retainStacks?: boolean | ros.IResolvable;

    /**
     * Property timeoutInMinutes: undefined
     */
    readonly timeoutInMinutes?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ROS::StackInstances`
 */
export class StackInstances extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute LastOperationId: undefined
     */
    public readonly attrLastOperationId: ros.IResolvable;

    /**
     * Attribute Stacks: undefined
     */
    public readonly attrStacks: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ROS::StackInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StackInstancesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosStackInstances = new RosStackInstances(this, id,  {
            operationPreferences: props.operationPreferences,
            retainStacks: props.retainStacks === undefined || props.retainStacks === null ? false : props.retainStacks,
            regionIds: props.regionIds,
            accountIds: props.accountIds,
            parameterOverrides: props.parameterOverrides,
            stackGroupName: props.stackGroupName,
            deploymentTargets: props.deploymentTargets,
            operationDescription: props.operationDescription,
            disableRollback: props.disableRollback,
            timeoutInMinutes: props.timeoutInMinutes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStackInstances;
        this.attrLastOperationId = rosStackInstances.attrLastOperationId;
        this.attrStacks = rosStackInstances.attrStacks;
    }
}
