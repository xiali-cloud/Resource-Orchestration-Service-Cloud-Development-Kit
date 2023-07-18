package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::IpsecServer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:03.968Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpsecServerProps")
@software.amazon.jsii.Jsii.Proxy(IpsecServerProps.Jsii$Proxy.class)
public interface IpsecServerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client.
     * <p>
     * Note: The client network segment cannot conflict with the VPC side network segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClientIpPool();

    /**
     * Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment.
     * <p>
     * Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalSubnet();

    /**
     * Property vpnGatewayId: VPN gateway instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId();

    /**
     * Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
     * <p>
     * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectImmediately() {
        return null;
    }

    /**
     * Property ikeConfig: Negotiation parameter configuration in the first phase.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIkeConfig() {
        return null;
    }

    /**
     * Property ipsecConfig: Negotiation parameter configuration in the second phase.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecConfig() {
        return null;
    }

    /**
     * Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character.
     * <p>
     * It can contain digits, underscores (_), and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecServerName() {
        return null;
    }

    /**
     * Property psk: Pre-Shared key.
     * <p>
     * Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPsk() {
        return null;
    }

    /**
     * Property pskEnabled: Whether to enable the pre-shared key authentication method.
     * <p>
     * Only the value is true, which means that the pre-shared key authentication mode is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPskEnabled() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link IpsecServerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link IpsecServerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<IpsecServerProps> {
        java.lang.Object clientIpPool;
        java.lang.Object localSubnet;
        java.lang.Object vpnGatewayId;
        java.lang.Object effectImmediately;
        java.lang.Object ikeConfig;
        java.lang.Object ipsecConfig;
        java.lang.Object ipsecServerName;
        java.lang.Object psk;
        java.lang.Object pskEnabled;

        /**
         * Sets the value of {@link IpsecServerProps#getClientIpPool}
         * @param clientIpPool Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. This parameter is required.
         *                     Note: The client network segment cannot conflict with the VPC side network segment.
         * @return {@code this}
         */
        public Builder clientIpPool(java.lang.String clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getClientIpPool}
         * @param clientIpPool Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. This parameter is required.
         *                     Note: The client network segment cannot conflict with the VPC side network segment.
         * @return {@code this}
         */
        public Builder clientIpPool(com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getLocalSubnet}
         * @param localSubnet Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. This parameter is required.
         *                    Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
         * @return {@code this}
         */
        public Builder localSubnet(java.lang.String localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getLocalSubnet}
         * @param localSubnet Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. This parameter is required.
         *                    Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
         * @return {@code this}
         */
        public Builder localSubnet(com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getVpnGatewayId}
         * @param vpnGatewayId Property vpnGatewayId: VPN gateway instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getVpnGatewayId}
         * @param vpnGatewayId Property vpnGatewayId: VPN gateway instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getEffectImmediately}
         * @param effectImmediately Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
         *                          false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
         * @return {@code this}
         */
        public Builder effectImmediately(java.lang.Boolean effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getEffectImmediately}
         * @param effectImmediately Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
         *                          false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
         * @return {@code this}
         */
        public Builder effectImmediately(com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getIkeConfig}
         * @param ikeConfig Property ikeConfig: Negotiation parameter configuration in the first phase.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getIkeConfig}
         * @param ikeConfig Property ikeConfig: Negotiation parameter configuration in the first phase.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.vpc.RosIpsecServer.IkeConfigProperty ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getIpsecConfig}
         * @param ipsecConfig Property ipsecConfig: Negotiation parameter configuration in the second phase.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getIpsecConfig}
         * @param ipsecConfig Property ipsecConfig: Negotiation parameter configuration in the second phase.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.vpc.RosIpsecServer.IpsecConfigProperty ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getIpsecServerName}
         * @param ipsecServerName Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character.
         *                        It can contain digits, underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder ipsecServerName(java.lang.String ipsecServerName) {
            this.ipsecServerName = ipsecServerName;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getIpsecServerName}
         * @param ipsecServerName Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character.
         *                        It can contain digits, underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder ipsecServerName(com.aliyun.ros.cdk.core.IResolvable ipsecServerName) {
            this.ipsecServerName = ipsecServerName;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getPsk}
         * @param psk Property psk: Pre-Shared key.
         *            Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
         * @return {@code this}
         */
        public Builder psk(java.lang.String psk) {
            this.psk = psk;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getPsk}
         * @param psk Property psk: Pre-Shared key.
         *            Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
         * @return {@code this}
         */
        public Builder psk(com.aliyun.ros.cdk.core.IResolvable psk) {
            this.psk = psk;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getPskEnabled}
         * @param pskEnabled Property pskEnabled: Whether to enable the pre-shared key authentication method.
         *                   Only the value is true, which means that the pre-shared key authentication mode is enabled.
         * @return {@code this}
         */
        public Builder pskEnabled(java.lang.Boolean pskEnabled) {
            this.pskEnabled = pskEnabled;
            return this;
        }

        /**
         * Sets the value of {@link IpsecServerProps#getPskEnabled}
         * @param pskEnabled Property pskEnabled: Whether to enable the pre-shared key authentication method.
         *                   Only the value is true, which means that the pre-shared key authentication mode is enabled.
         * @return {@code this}
         */
        public Builder pskEnabled(com.aliyun.ros.cdk.core.IResolvable pskEnabled) {
            this.pskEnabled = pskEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link IpsecServerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public IpsecServerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link IpsecServerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpsecServerProps {
        private final java.lang.Object clientIpPool;
        private final java.lang.Object localSubnet;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object effectImmediately;
        private final java.lang.Object ikeConfig;
        private final java.lang.Object ipsecConfig;
        private final java.lang.Object ipsecServerName;
        private final java.lang.Object psk;
        private final java.lang.Object pskEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clientIpPool = software.amazon.jsii.Kernel.get(this, "clientIpPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localSubnet = software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectImmediately = software.amazon.jsii.Kernel.get(this, "effectImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ikeConfig = software.amazon.jsii.Kernel.get(this, "ikeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipsecConfig = software.amazon.jsii.Kernel.get(this, "ipsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipsecServerName = software.amazon.jsii.Kernel.get(this, "ipsecServerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.psk = software.amazon.jsii.Kernel.get(this, "psk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pskEnabled = software.amazon.jsii.Kernel.get(this, "pskEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clientIpPool = java.util.Objects.requireNonNull(builder.clientIpPool, "clientIpPool is required");
            this.localSubnet = java.util.Objects.requireNonNull(builder.localSubnet, "localSubnet is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(builder.vpnGatewayId, "vpnGatewayId is required");
            this.effectImmediately = builder.effectImmediately;
            this.ikeConfig = builder.ikeConfig;
            this.ipsecConfig = builder.ipsecConfig;
            this.ipsecServerName = builder.ipsecServerName;
            this.psk = builder.psk;
            this.pskEnabled = builder.pskEnabled;
        }

        @Override
        public final java.lang.Object getClientIpPool() {
            return this.clientIpPool;
        }

        @Override
        public final java.lang.Object getLocalSubnet() {
            return this.localSubnet;
        }

        @Override
        public final java.lang.Object getVpnGatewayId() {
            return this.vpnGatewayId;
        }

        @Override
        public final java.lang.Object getEffectImmediately() {
            return this.effectImmediately;
        }

        @Override
        public final java.lang.Object getIkeConfig() {
            return this.ikeConfig;
        }

        @Override
        public final java.lang.Object getIpsecConfig() {
            return this.ipsecConfig;
        }

        @Override
        public final java.lang.Object getIpsecServerName() {
            return this.ipsecServerName;
        }

        @Override
        public final java.lang.Object getPsk() {
            return this.psk;
        }

        @Override
        public final java.lang.Object getPskEnabled() {
            return this.pskEnabled;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clientIpPool", om.valueToTree(this.getClientIpPool()));
            data.set("localSubnet", om.valueToTree(this.getLocalSubnet()));
            data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            if (this.getEffectImmediately() != null) {
                data.set("effectImmediately", om.valueToTree(this.getEffectImmediately()));
            }
            if (this.getIkeConfig() != null) {
                data.set("ikeConfig", om.valueToTree(this.getIkeConfig()));
            }
            if (this.getIpsecConfig() != null) {
                data.set("ipsecConfig", om.valueToTree(this.getIpsecConfig()));
            }
            if (this.getIpsecServerName() != null) {
                data.set("ipsecServerName", om.valueToTree(this.getIpsecServerName()));
            }
            if (this.getPsk() != null) {
                data.set("psk", om.valueToTree(this.getPsk()));
            }
            if (this.getPskEnabled() != null) {
                data.set("pskEnabled", om.valueToTree(this.getPskEnabled()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.IpsecServerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            IpsecServerProps.Jsii$Proxy that = (IpsecServerProps.Jsii$Proxy) o;

            if (!clientIpPool.equals(that.clientIpPool)) return false;
            if (!localSubnet.equals(that.localSubnet)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (this.effectImmediately != null ? !this.effectImmediately.equals(that.effectImmediately) : that.effectImmediately != null) return false;
            if (this.ikeConfig != null ? !this.ikeConfig.equals(that.ikeConfig) : that.ikeConfig != null) return false;
            if (this.ipsecConfig != null ? !this.ipsecConfig.equals(that.ipsecConfig) : that.ipsecConfig != null) return false;
            if (this.ipsecServerName != null ? !this.ipsecServerName.equals(that.ipsecServerName) : that.ipsecServerName != null) return false;
            if (this.psk != null ? !this.psk.equals(that.psk) : that.psk != null) return false;
            return this.pskEnabled != null ? this.pskEnabled.equals(that.pskEnabled) : that.pskEnabled == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clientIpPool.hashCode();
            result = 31 * result + (this.localSubnet.hashCode());
            result = 31 * result + (this.vpnGatewayId.hashCode());
            result = 31 * result + (this.effectImmediately != null ? this.effectImmediately.hashCode() : 0);
            result = 31 * result + (this.ikeConfig != null ? this.ikeConfig.hashCode() : 0);
            result = 31 * result + (this.ipsecConfig != null ? this.ipsecConfig.hashCode() : 0);
            result = 31 * result + (this.ipsecServerName != null ? this.ipsecServerName.hashCode() : 0);
            result = 31 * result + (this.psk != null ? this.psk.hashCode() : 0);
            result = 31 * result + (this.pskEnabled != null ? this.pskEnabled.hashCode() : 0);
            return result;
        }
    }
}
