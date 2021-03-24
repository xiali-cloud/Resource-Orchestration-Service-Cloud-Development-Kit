using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::SAMLProvider`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSAMLProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosSAMLProviderProps")]
    public interface IRosSAMLProviderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        /// </remarks>
        [JsiiProperty(name: "samlProviderName", typeJson: "{\"primitive\":\"string\"}")]
        string SamlProviderName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description can contain a maximum of 256 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        /// </remarks>
        [JsiiProperty(name: "samlMetadataDocument", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SamlMetadataDocument
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        /// </remarks>
        [JsiiProperty(name: "samlMetadataDocumentUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SamlMetadataDocumentUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::SAMLProvider`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSAMLProviderProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosSAMLProviderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosSAMLProviderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
            /// </remarks>
            [JsiiProperty(name: "samlProviderName", typeJson: "{\"primitive\":\"string\"}")]
            public string SamlProviderName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description can contain a maximum of 256 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "samlMetadataDocument", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SamlMetadataDocument
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "samlMetadataDocumentUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SamlMetadataDocumentUrl
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
