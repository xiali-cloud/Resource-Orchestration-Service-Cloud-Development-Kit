import * as ros from '@alicloud/ros-cdk-core';
import { RosModel } from './nlpautoml.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosModel as ModelProperty };

/**
 * Properties for defining a `ALIYUN::NLPAUTOML::Model`
 */
export interface ModelProps {

    /**
     * Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
     */
    readonly datasetIdList: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * Property modelName: The name of model.
     */
    readonly modelName: string | ros.IResolvable;

    /**
     * Property modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
     * Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
     */
    readonly modelType: string | ros.IResolvable;

    /**
     * Property projectId: The project id to which the model belongs
     */
    readonly projectId: number | ros.IResolvable;

    /**
     * Property lr: Learning rate.
     */
    readonly lr?: string | ros.IResolvable;

    /**
     * Property nepochs: Number of training dataset iterations
     */
    readonly nepochs?: string | ros.IResolvable;

    /**
     * Property testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
     */
    readonly testDatasetIdList?: Array<number | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::NLPAUTOML::Model`
 */
export class Model extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ModelId: The ID of model.
     */
    public readonly attrModelId: ros.IResolvable;

    /**
     * Attribute ModelVersion: The version of model.
     */
    public readonly attrModelVersion: ros.IResolvable;

    /**
     * Create a new `ALIYUN::NLPAUTOML::Model`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ModelProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosModel = new RosModel(this, id,  {
            datasetIdList: props.datasetIdList,
            modelName: props.modelName,
            testDatasetIdList: props.testDatasetIdList,
            nepochs: props.nepochs,
            lr: props.lr,
            projectId: props.projectId,
            modelType: props.modelType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosModel;
        this.attrModelId = rosModel.attrModelId;
        this.attrModelVersion = rosModel.attrModelVersion;
    }
}
