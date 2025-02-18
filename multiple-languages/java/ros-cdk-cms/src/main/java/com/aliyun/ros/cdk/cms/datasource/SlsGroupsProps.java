package com.aliyun.ros.cdk.cms.datasource;

/**
 * Properties for defining a <code>DATASOURCE::CMS::SlsGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.078Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.SlsGroupsProps")
@software.amazon.jsii.Jsii.Proxy(SlsGroupsProps.Jsii$Proxy.class)
public interface SlsGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property slsGroupName: The name of the Logstore group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SlsGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SlsGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SlsGroupsProps> {
        java.lang.Object slsGroupName;

        /**
         * Sets the value of {@link SlsGroupsProps#getSlsGroupName}
         * @param slsGroupName Property slsGroupName: The name of the Logstore group.
         * @return {@code this}
         */
        public Builder slsGroupName(java.lang.String slsGroupName) {
            this.slsGroupName = slsGroupName;
            return this;
        }

        /**
         * Sets the value of {@link SlsGroupsProps#getSlsGroupName}
         * @param slsGroupName Property slsGroupName: The name of the Logstore group.
         * @return {@code this}
         */
        public Builder slsGroupName(com.aliyun.ros.cdk.core.IResolvable slsGroupName) {
            this.slsGroupName = slsGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SlsGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SlsGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SlsGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SlsGroupsProps {
        private final java.lang.Object slsGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.slsGroupName = software.amazon.jsii.Kernel.get(this, "slsGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.slsGroupName = builder.slsGroupName;
        }

        @Override
        public final java.lang.Object getSlsGroupName() {
            return this.slsGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getSlsGroupName() != null) {
                data.set("slsGroupName", om.valueToTree(this.getSlsGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.datasource.SlsGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SlsGroupsProps.Jsii$Proxy that = (SlsGroupsProps.Jsii$Proxy) o;

            return this.slsGroupName != null ? this.slsGroupName.equals(that.slsGroupName) : that.slsGroupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.slsGroupName != null ? this.slsGroupName.hashCode() : 0;
            return result;
        }
    }
}
