import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowProject } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlowProject as FlowProjectProperty };

/**
 * Properties for defining a `ALIYUN::EMR::FlowProject`
 */
export interface FlowProjectProps {

    /**
     * Property description: The description of the project.
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property flowProjectName: The name of the project.
     */
    readonly flowProjectName: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::EMR::FlowProject`
 */
export class FlowProject extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CreateTime: The time when the project was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: The description of the project.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute FlowProjectId: The ID of the project.
     */
    public readonly attrFlowProjectId: ros.IResolvable;

    /**
     * Attribute FlowProjectName: The name of the project.
     */
    public readonly attrFlowProjectName: ros.IResolvable;

    /**
     * Attribute GmtModified: The time when the project was modified.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * Attribute UserId: The ID of the primary account.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::EMR::FlowProject`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFlowProject = new RosFlowProject(this, id,  {
            description: props.description,
            flowProjectName: props.flowProjectName,
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlowProject;
        this.attrCreateTime = rosFlowProject.attrCreateTime;
        this.attrDescription = rosFlowProject.attrDescription;
        this.attrFlowProjectId = rosFlowProject.attrFlowProjectId;
        this.attrFlowProjectName = rosFlowProject.attrFlowProjectName;
        this.attrGmtModified = rosFlowProject.attrGmtModified;
        this.attrUserId = rosFlowProject.attrUserId;
    }
}
