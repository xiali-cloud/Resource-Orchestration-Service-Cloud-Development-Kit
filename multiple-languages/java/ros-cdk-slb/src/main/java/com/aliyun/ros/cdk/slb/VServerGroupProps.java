package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::VServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:41.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.VServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(VServerGroupProps.Jsii$Proxy.class)
public interface VServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property loadBalancerId: The id of load balancer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property vServerGroupName: Display name of the VServerGroup.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVServerGroupName();

    /**
     * Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServers() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VServerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VServerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VServerGroupProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object vServerGroupName;
        java.lang.Object backendServers;

        /**
         * Sets the value of {@link VServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getVServerGroupName}
         * @param vServerGroupName Property vServerGroupName: Display name of the VServerGroup. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroupName(java.lang.String vServerGroupName) {
            this.vServerGroupName = vServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getVServerGroupName}
         * @param vServerGroupName Property vServerGroupName: Display name of the VServerGroup. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroupName(com.aliyun.ros.cdk.core.IResolvable vServerGroupName) {
            this.vServerGroupName = vServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getBackendServers}
         * @param backendServers Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
         * @return {@code this}
         */
        public Builder backendServers(com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getBackendServers}
         * @param backendServers Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
         * @return {@code this}
         */
        public Builder backendServers(java.util.List<? extends java.lang.Object> backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VServerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VServerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VServerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VServerGroupProps {
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object vServerGroupName;
        private final java.lang.Object backendServers;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vServerGroupName = software.amazon.jsii.Kernel.get(this, "vServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServers = software.amazon.jsii.Kernel.get(this, "backendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.vServerGroupName = java.util.Objects.requireNonNull(builder.vServerGroupName, "vServerGroupName is required");
            this.backendServers = builder.backendServers;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getVServerGroupName() {
            return this.vServerGroupName;
        }

        @Override
        public final java.lang.Object getBackendServers() {
            return this.backendServers;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("vServerGroupName", om.valueToTree(this.getVServerGroupName()));
            if (this.getBackendServers() != null) {
                data.set("backendServers", om.valueToTree(this.getBackendServers()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.VServerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VServerGroupProps.Jsii$Proxy that = (VServerGroupProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!vServerGroupName.equals(that.vServerGroupName)) return false;
            return this.backendServers != null ? this.backendServers.equals(that.backendServers) : that.backendServers == null;
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.vServerGroupName.hashCode());
            result = 31 * result + (this.backendServers != null ? this.backendServers.hashCode() : 0);
            return result;
        }
    }
}
