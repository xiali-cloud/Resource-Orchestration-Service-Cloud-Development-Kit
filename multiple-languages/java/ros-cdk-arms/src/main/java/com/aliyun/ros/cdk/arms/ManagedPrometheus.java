package com.aliyun.ros.cdk.arms;

/**
 * A ROS resource type:  <code>ALIYUN::ARMS::ManagedPrometheus</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:33.479Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.ManagedPrometheus")
public class ManagedPrometheus extends com.aliyun.ros.cdk.core.Resource {

    protected ManagedPrometheus(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ManagedPrometheus(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ARMS::ManagedPrometheus</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ManagedPrometheus(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.ManagedPrometheusProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ARMS::ManagedPrometheus</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ManagedPrometheus(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.ManagedPrometheusProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterType: The type of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The vpc ID of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.ManagedPrometheus}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.ManagedPrometheus> {
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
        private final com.aliyun.ros.cdk.arms.ManagedPrometheusProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.ManagedPrometheusProps.Builder();
        }

        /**
         * Property clusterType: The type of the cluster.
         * <p>
         * Currently, only ask, ecs and one clusters are supported. Default is ecs.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: The type of the cluster.
         * <p>
         * Currently, only ask, ecs and one clusters are supported. Default is ecs.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: The type of the cluster. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property securityGroupId: The security group ID of the cluster.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The security group ID of the cluster. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The security group ID of the cluster.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The security group ID of the cluster. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property vpcId: The vpc ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The vpc ID of the cluster. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The vpc ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The vpc ID of the cluster. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vswith ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vswith ID of the cluster. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vswith ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vswith ID of the cluster. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property clusterName: The name of the cluster.
         * <p>
         * Required when the ClusterType is ecs.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of the cluster. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: The name of the cluster.
         * <p>
         * Required when the ClusterType is ecs.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of the cluster. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.
         * <p>
         * When empty or "free", binds to the shared version of Grafana.
         * <p>
         * @return {@code this}
         * @param grafanaInstanceId Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. This parameter is required.
         */
        public Builder grafanaInstanceId(final java.lang.String grafanaInstanceId) {
            this.props.grafanaInstanceId(grafanaInstanceId);
            return this;
        }
        /**
         * Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.
         * <p>
         * When empty or "free", binds to the shared version of Grafana.
         * <p>
         * @return {@code this}
         * @param grafanaInstanceId Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. This parameter is required.
         */
        public Builder grafanaInstanceId(final com.aliyun.ros.cdk.core.IResolvable grafanaInstanceId) {
            this.props.grafanaInstanceId(grafanaInstanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.ManagedPrometheus}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.ManagedPrometheus build() {
            return new com.aliyun.ros.cdk.arms.ManagedPrometheus(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
