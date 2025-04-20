from karrio.core.metadata import Metadata

from karrio.mappers.tnt.mapper import Mapper
from karrio.mappers.tnt.proxy import Proxy
from karrio.mappers.tnt.settings import Settings
import karrio.providers.tnt.units as units


METADATA = Metadata(
    status="beta",
    id="tnt",
    label="TNT",
    # Integrations
    Mapper=Mapper,
    Proxy=Proxy,
    Settings=Settings,
    # Data Units
    options=units.ShippingOption,
    services=units.ShippingService,
    packaging_types=units.PackageType,
    package_presets=units.PackagePresets,
    connection_configs=units.ConnectionConfig,
    has_intl_accounts=True,
    # New fields
    website="https://www.tnt.com",
    description="TNT is an international courier delivery services company with headquarters in the Netherlands.",
)
