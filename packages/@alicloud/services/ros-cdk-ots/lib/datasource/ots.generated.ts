// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::OTS::Instances`
 */
export interface RosInstancesProps {

    /**
     * @Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OTS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OTS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * A ROS template type:  `DATASOURCE::OTS::Instances`
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OTS::Instances";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceNames: The list of instance names.
     */
    public readonly attrInstanceNames: ros.IResolvable;

    /**
     * @Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The name of instance.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of instance.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::OTS::Instances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceNames = this.getAtt('InstanceNames');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::OTS::Tables`
 */
export interface RosTablesProps {

    /**
     * @Property instanceName: The name of the instance to which the table belongs.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property tableName: The name of table.
     */
    readonly tableName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTablesProps`
 *
 * @param properties - the TypeScript properties of a `RosTablesProps`
 *
 * @returns the result of the validation.
 */
function RosTablesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('tableName', ros.validateString)(properties.tableName));
    return errors.wrap('supplied properties not correct for "RosTablesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OTS::Tables` resource
 *
 * @param properties - the TypeScript properties of a `RosTablesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OTS::Tables` resource.
 */
// @ts-ignore TS6133
function rosTablesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTablesPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      TableName: ros.stringToRosTemplate(properties.tableName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::OTS::Tables`
 */
export class RosTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OTS::Tables";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TableNames: The list of table names.
     */
    public readonly attrTableNames: ros.IResolvable;

    /**
     * @Attribute Tables: The list of tables.
     */
    public readonly attrTables: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceName: The name of the instance to which the table belongs.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property tableName: The name of table.
     */
    public tableName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::OTS::Tables`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTablesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTables.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTableNames = this.getAtt('TableNames');
        this.attrTables = this.getAtt('Tables');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.tableName = props.tableName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            tableName: this.tableName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTablesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
