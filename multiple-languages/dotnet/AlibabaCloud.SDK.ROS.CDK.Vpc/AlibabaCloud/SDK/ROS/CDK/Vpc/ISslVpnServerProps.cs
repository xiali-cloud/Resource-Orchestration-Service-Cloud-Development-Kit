using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnServer`.</summary>
    [JsiiInterface(nativeType: typeof(ISslVpnServerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnServerProps")]
    public interface ISslVpnServerProps
    {
        /// <summary>Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.</summary>
        /// <remarks>
        /// It does not refer to the existing intranet segment of the client.
        /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        /// The network segment cannot conflict with the LocalSubnet address segment.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"primitive\":\"string\"}")]
        string ClientIpPool
        {
            get;
        }

        /// <summary>Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.</summary>
        /// <remarks>
        /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}")]
        string LocalSubnet
        {
            get;
        }

        /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string VpnGatewayId
        {
            get;
        }

        /// <summary>Property cipher: The encryption algorithm used by SSL-VPN.</summary>
        /// <remarks>
        /// Value:
        /// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        /// </remarks>
        [JsiiProperty(name: "cipher", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Cipher
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property compress: Whether it is compressed.</summary>
        [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Compress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the SSL-VPN server.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        /// But it can't start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property port: The port used by the SSL-VPN server.</summary>
        /// <remarks>
        /// The default value is 1194. Cannot use the following ports:
        /// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Port
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proto: The protocol used by the SSL-VPN server.</summary>
        /// <remarks>
        /// Allowed values: UDP (default) | TCP.
        /// </remarks>
        [JsiiProperty(name: "proto", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Proto
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnServer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISslVpnServerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnServerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ISslVpnServerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.</summary>
            /// <remarks>
            /// It does not refer to the existing intranet segment of the client.
            /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
            /// The network segment cannot conflict with the LocalSubnet address segment.
            /// </remarks>
            [JsiiProperty(name: "clientIpPool", typeJson: "{\"primitive\":\"string\"}")]
            public string ClientIpPool
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.</summary>
            /// <remarks>
            /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}")]
            public string LocalSubnet
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
            [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpnGatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property cipher: The encryption algorithm used by SSL-VPN.</summary>
            /// <remarks>
            /// Value:
            /// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cipher", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Cipher
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property compress: Whether it is compressed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Compress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the SSL-VPN server.</summary>
            /// <remarks>
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
            /// But it can't start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property port: The port used by the SSL-VPN server.</summary>
            /// <remarks>
            /// The default value is 1194. Cannot use the following ports:
            /// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Port
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property proto: The protocol used by the SSL-VPN server.</summary>
            /// <remarks>
            /// Allowed values: UDP (default) | TCP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proto", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Proto
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
