package com.aliyun.ros.cdk.lindorm.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::Lindorm::Instances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.007Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.datasource.Instances")
public class Instances extends com.aliyun.ros.cdk.core.Resource {

    protected Instances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::Lindorm::Instances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.lindorm.datasource.InstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::Lindorm::Instances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.lindorm.datasource.InstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::Lindorm::Instances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceIds: The list of The instance list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Instances: The detail list of The instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.lindorm.datasource.Instances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.lindorm.datasource.Instances> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.lindorm.datasource.InstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property instanceIds: The list of the instance id.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The list of the instance id. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The list of the instance id.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The list of the instance id. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }

        /**
         * Property queryStr: Instance name keyword, which can be used for fuzzy search.
         * <p>
         * @return {@code this}
         * @param queryStr Property queryStr: Instance name keyword, which can be used for fuzzy search. This parameter is required.
         */
        public Builder queryStr(final java.lang.String queryStr) {
            this.props().queryStr(queryStr);
            return this;
        }
        /**
         * Property queryStr: Instance name keyword, which can be used for fuzzy search.
         * <p>
         * @return {@code this}
         * @param queryStr Property queryStr: Instance name keyword, which can be used for fuzzy search. This parameter is required.
         */
        public Builder queryStr(final com.aliyun.ros.cdk.core.IResolvable queryStr) {
            this.props().queryStr(queryStr);
            return this;
        }

        /**
         * Property resourceGroupId: The resource group id of lindorm instance.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group id of lindorm instance. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group id of lindorm instance.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group id of lindorm instance. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property serviceType: The type of lindorm instance.
         * <p>
         * @return {@code this}
         * @param serviceType Property serviceType: The type of lindorm instance. This parameter is required.
         */
        public Builder serviceType(final java.lang.String serviceType) {
            this.props().serviceType(serviceType);
            return this;
        }
        /**
         * Property serviceType: The type of lindorm instance.
         * <p>
         * @return {@code this}
         * @param serviceType Property serviceType: The type of lindorm instance. This parameter is required.
         */
        public Builder serviceType(final com.aliyun.ros.cdk.core.IResolvable serviceType) {
            this.props().serviceType(serviceType);
            return this;
        }

        /**
         * Property supportEngine: Database engine types supported by the queried instance.
         * <p>
         * 1: Support search engines.
         * 2: Support timing engine.
         * 4: Support wide table engine.
         * 8: Support file engine.
         * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
         * <p>
         * @return {@code this}
         * @param supportEngine Property supportEngine: Database engine types supported by the queried instance. This parameter is required.
         */
        public Builder supportEngine(final java.lang.Number supportEngine) {
            this.props().supportEngine(supportEngine);
            return this;
        }
        /**
         * Property supportEngine: Database engine types supported by the queried instance.
         * <p>
         * 1: Support search engines.
         * 2: Support timing engine.
         * 4: Support wide table engine.
         * 8: Support file engine.
         * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
         * <p>
         * @return {@code this}
         * @param supportEngine Property supportEngine: Database engine types supported by the queried instance. This parameter is required.
         */
        public Builder supportEngine(final com.aliyun.ros.cdk.core.IResolvable supportEngine) {
            this.props().supportEngine(supportEngine);
            return this;
        }

        /**
         * Property tags: Tags of lindorm instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of lindorm instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.lindorm.datasource.Instances}.
         */
        @Override
        public com.aliyun.ros.cdk.lindorm.datasource.Instances build() {
            return new com.aliyun.ros.cdk.lindorm.datasource.Instances(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.lindorm.datasource.InstancesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.lindorm.datasource.InstancesProps.Builder();
            }
            return this.props;
        }
    }
}
