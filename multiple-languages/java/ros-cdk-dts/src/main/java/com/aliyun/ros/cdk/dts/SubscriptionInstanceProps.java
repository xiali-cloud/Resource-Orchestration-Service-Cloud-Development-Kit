package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.859Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.SubscriptionInstanceProps")
@software.amazon.jsii.Jsii.Proxy(SubscriptionInstanceProps.Jsii$Proxy.class)
public interface SubscriptionInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configuration: Subscription configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfiguration() {
        return null;
    }

    /**
     * Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle.
     * <p>
     * Default: MySQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpointInstanceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SubscriptionInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SubscriptionInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SubscriptionInstanceProps> {
        private java.lang.Object configuration;
        private java.lang.Object sourceEndpointInstanceType;

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getConfiguration}
         * @param configuration Property configuration: Subscription configuration.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getConfiguration}
         * @param configuration Property configuration: Subscription configuration.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.ConfigurationProperty configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle.
         *                                   Default: MySQL.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(java.lang.String sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle.
         *                                   Default: MySQL.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(com.aliyun.ros.cdk.core.IResolvable sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SubscriptionInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SubscriptionInstanceProps build() {
            return new Jsii$Proxy(configuration, sourceEndpointInstanceType);
        }
    }

    /**
     * An implementation for {@link SubscriptionInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionInstanceProps {
        private final java.lang.Object configuration;
        private final java.lang.Object sourceEndpointInstanceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpointInstanceType = software.amazon.jsii.Kernel.get(this, "sourceEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object configuration, final java.lang.Object sourceEndpointInstanceType) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configuration = configuration;
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
        }

        @Override
        public final java.lang.Object getConfiguration() {
            return this.configuration;
        }

        @Override
        public final java.lang.Object getSourceEndpointInstanceType() {
            return this.sourceEndpointInstanceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getConfiguration() != null) {
                data.set("configuration", om.valueToTree(this.getConfiguration()));
            }
            if (this.getSourceEndpointInstanceType() != null) {
                data.set("sourceEndpointInstanceType", om.valueToTree(this.getSourceEndpointInstanceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.SubscriptionInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SubscriptionInstanceProps.Jsii$Proxy that = (SubscriptionInstanceProps.Jsii$Proxy) o;

            if (this.configuration != null ? !this.configuration.equals(that.configuration) : that.configuration != null) return false;
            return this.sourceEndpointInstanceType != null ? this.sourceEndpointInstanceType.equals(that.sourceEndpointInstanceType) : that.sourceEndpointInstanceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configuration != null ? this.configuration.hashCode() : 0;
            result = 31 * result + (this.sourceEndpointInstanceType != null ? this.sourceEndpointInstanceType.hashCode() : 0);
            return result;
        }
    }
}
