package com.aliyun.ros.cdk.vpc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::VPC::RouteTables</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.815Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RouteTables")
public class RouteTables extends com.aliyun.ros.cdk.core.Resource {

    protected RouteTables(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RouteTables(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::VPC::RouteTables</code>.
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
    public RouteTables(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.RouteTablesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::RouteTables</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public RouteTables(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.RouteTablesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::RouteTables</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public RouteTables(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute RouteTableIds: the list of the route table ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteTableIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteTableIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteTables: The list of The route tables.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteTables() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteTables", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.RouteTables}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.RouteTables> {
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
        private com.aliyun.ros.cdk.vpc.datasource.RouteTablesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the route table belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the route table belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the route table belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the route table belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property routerId: The ID of the VRouter to which the route table belongs.
         * <p>
         * @return {@code this}
         * @param routerId Property routerId: The ID of the VRouter to which the route table belongs. This parameter is required.
         */
        public Builder routerId(final java.lang.String routerId) {
            this.props().routerId(routerId);
            return this;
        }
        /**
         * Property routerId: The ID of the VRouter to which the route table belongs.
         * <p>
         * @return {@code this}
         * @param routerId Property routerId: The ID of the VRouter to which the route table belongs. This parameter is required.
         */
        public Builder routerId(final com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.props().routerId(routerId);
            return this;
        }

        /**
         * Property routerType: The type of the VRouter to which the route table belongs.
         * <p>
         * Valid values:
         * VRouter (default): VRouter.
         * VBR: Virtual Border Router (VBR).
         * <p>
         * @return {@code this}
         * @param routerType Property routerType: The type of the VRouter to which the route table belongs. This parameter is required.
         */
        public Builder routerType(final java.lang.String routerType) {
            this.props().routerType(routerType);
            return this;
        }
        /**
         * Property routerType: The type of the VRouter to which the route table belongs.
         * <p>
         * Valid values:
         * VRouter (default): VRouter.
         * VBR: Virtual Border Router (VBR).
         * <p>
         * @return {@code this}
         * @param routerType Property routerType: The type of the VRouter to which the route table belongs. This parameter is required.
         */
        public Builder routerType(final com.aliyun.ros.cdk.core.IResolvable routerType) {
            this.props().routerType(routerType);
            return this;
        }

        /**
         * Property routeTableId: The ID of the route table.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: The ID of the route table. This parameter is required.
         */
        public Builder routeTableId(final java.lang.String routeTableId) {
            this.props().routeTableId(routeTableId);
            return this;
        }
        /**
         * Property routeTableId: The ID of the route table.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: The ID of the route table. This parameter is required.
         */
        public Builder routeTableId(final com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.props().routeTableId(routeTableId);
            return this;
        }

        /**
         * Property routeTableName: The name of the route table.
         * <p>
         * @return {@code this}
         * @param routeTableName Property routeTableName: The name of the route table. This parameter is required.
         */
        public Builder routeTableName(final java.lang.String routeTableName) {
            this.props().routeTableName(routeTableName);
            return this;
        }
        /**
         * Property routeTableName: The name of the route table.
         * <p>
         * @return {@code this}
         * @param routeTableName Property routeTableName: The name of the route table. This parameter is required.
         */
        public Builder routeTableName(final com.aliyun.ros.cdk.core.IResolvable routeTableName) {
            this.props().routeTableName(routeTableName);
            return this;
        }

        /**
         * Property vpcId: The ID of the VRouter to which the route table belongs.
         * <p>
         * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VRouter to which the route table belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VRouter to which the route table belongs.
         * <p>
         * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VRouter to which the route table belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.RouteTables}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.RouteTables build() {
            return new com.aliyun.ros.cdk.vpc.datasource.RouteTables(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.RouteTablesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.RouteTablesProps.Builder();
            }
            return this.props;
        }
    }
}
