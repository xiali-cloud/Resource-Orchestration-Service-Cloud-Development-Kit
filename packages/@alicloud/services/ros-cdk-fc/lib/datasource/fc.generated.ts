// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::FC::Aliases`
 */
export interface RosAliasesProps {

    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAliasesProps`
 *
 * @param properties - the TypeScript properties of a `RosAliasesProps`
 *
 * @returns the result of the validation.
 */
function RosAliasesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosAliasesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Aliases` resource
 *
 * @param properties - the TypeScript properties of a `RosAliasesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Aliases` resource.
 */
// @ts-ignore TS6133
function rosAliasesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAliasesPropsValidator(properties).assertSuccess();
    }
    return {
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}

/**
 * A ROS template type:  `DATASOURCE::FC::Aliases`
 */
export class RosAliases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Aliases";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AliasNames: The list of alias names.
     */
    public readonly attrAliasNames: ros.IResolvable;

    /**
     * @Attribute Aliases: The list of aliases.
     */
    public readonly attrAliases: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceName: Service name.
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
     */
    public prefix: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::FC::Aliases`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAliasesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAliases.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAliasNames = this.getAtt('AliasNames');
        this.attrAliases = this.getAtt('Aliases');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.prefix = props.prefix;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceName: this.serviceName,
            prefix: this.prefix,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAliasesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::FC::CustomDomains`
 */
export interface RosCustomDomainsProps {

    /**
     * @Property prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomDomainsProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainsProps`
 *
 * @returns the result of the validation.
 */
function RosCustomDomainsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosCustomDomainsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::CustomDomains` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::CustomDomains` resource.
 */
// @ts-ignore TS6133
function rosCustomDomainsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomDomainsPropsValidator(properties).assertSuccess();
    }
    return {
      Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}

/**
 * A ROS template type:  `DATASOURCE::FC::CustomDomains`
 */
export class RosCustomDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::CustomDomains";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CustomDomains: The list of custom_domain.
     */
    public readonly attrCustomDomains: ros.IResolvable;

    /**
     * @Attribute DomainNames: The list of custom_domain names.
     */
    public readonly attrDomainNames: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    public prefix: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::FC::CustomDomains`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomDomainsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomDomains.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCustomDomains = this.getAtt('CustomDomains');
        this.attrDomainNames = this.getAtt('DomainNames');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prefix = props.prefix;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            prefix: this.prefix,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::FC::Functions`
 */
export interface RosFunctionsProps {

    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property prefix: Qualified returned function names must be prefixed with Prefix. For example, if the Prefix is "a", the returned function names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;

    /**
     * @Property qualifier: The service version, which can be version ID or alias name.
     */
    readonly qualifier?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFunctionsProps`
 *
 * @param properties - the TypeScript properties of a `RosFunctionsProps`
 *
 * @returns the result of the validation.
 */
function RosFunctionsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosFunctionsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Functions` resource
 *
 * @param properties - the TypeScript properties of a `RosFunctionsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Functions` resource.
 */
// @ts-ignore TS6133
function rosFunctionsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFunctionsPropsValidator(properties).assertSuccess();
    }
    return {
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Prefix: ros.stringToRosTemplate(properties.prefix),
      Qualifier: ros.stringToRosTemplate(properties.qualifier),
    };
}

/**
 * A ROS template type:  `DATASOURCE::FC::Functions`
 */
export class RosFunctions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Functions";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute FunctionNames: The list of function names.
     */
    public readonly attrFunctionNames: ros.IResolvable;

    /**
     * @Attribute Functions: The list of functions.
     */
    public readonly attrFunctions: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serviceName: Service name.
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property prefix: Qualified returned function names must be prefixed with Prefix. For example, if the Prefix is "a", the returned function names should be started with "a".
     */
    public prefix: string | ros.IResolvable | undefined;

    /**
     * @Property qualifier: The service version, which can be version ID or alias name.
     */
    public qualifier: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::FC::Functions`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFunctionsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFunctions.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFunctionNames = this.getAtt('FunctionNames');
        this.attrFunctions = this.getAtt('Functions');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
        this.prefix = props.prefix;
        this.qualifier = props.qualifier;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serviceName: this.serviceName,
            prefix: this.prefix,
            qualifier: this.qualifier,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFunctionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::FC::Services`
 */
export interface RosServicesProps {

    /**
     * @Property prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServicesProps`
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the result of the validation.
 */
function RosServicesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosServicesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Services` resource
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Services` resource.
 */
// @ts-ignore TS6133
function rosServicesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicesPropsValidator(properties).assertSuccess();
    }
    return {
      Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}

/**
 * A ROS template type:  `DATASOURCE::FC::Services`
 */
export class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Services";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ServiceNames: The list of service names.
     */
    public readonly attrServiceNames: ros.IResolvable;

    /**
     * @Attribute Services: The list of services.
     */
    public readonly attrServices: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
     */
    public prefix: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::FC::Services`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServicesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServices.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceNames = this.getAtt('ServiceNames');
        this.attrServices = this.getAtt('Services');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.prefix = props.prefix;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            prefix: this.prefix,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::FC::Triggers`
 */
export interface RosTriggersProps {

    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property prefix: Qualified returned trigger names must be prefixed with Prefix. For example, if the Prefix is "a", the returned trigger names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTriggersProps`
 *
 * @param properties - the TypeScript properties of a `RosTriggersProps`
 *
 * @returns the result of the validation.
 */
function RosTriggersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "RosTriggersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FC::Triggers` resource
 *
 * @param properties - the TypeScript properties of a `RosTriggersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FC::Triggers` resource.
 */
// @ts-ignore TS6133
function rosTriggersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTriggersPropsValidator(properties).assertSuccess();
    }
    return {
      FunctionName: ros.stringToRosTemplate(properties.functionName),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Prefix: ros.stringToRosTemplate(properties.prefix),
    };
}

/**
 * A ROS template type:  `DATASOURCE::FC::Triggers`
 */
export class RosTriggers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FC::Triggers";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TriggerNames: The list of trigger names.
     */
    public readonly attrTriggerNames: ros.IResolvable;

    /**
     * @Attribute Triggers: The list of triggers.
     */
    public readonly attrTriggers: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property functionName: Function name.
     */
    public functionName: string | ros.IResolvable;

    /**
     * @Property serviceName: Service name.
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property prefix: Qualified returned trigger names must be prefixed with Prefix. For example, if the Prefix is "a", the returned trigger names should be started with "a".
     */
    public prefix: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::FC::Triggers`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTriggersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTriggers.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTriggerNames = this.getAtt('TriggerNames');
        this.attrTriggers = this.getAtt('Triggers');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.functionName = props.functionName;
        this.serviceName = props.serviceName;
        this.prefix = props.prefix;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            functionName: this.functionName,
            serviceName: this.serviceName,
            prefix: this.prefix,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTriggersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
