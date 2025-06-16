using System;
using Contracts;
using MassTransit;

namespace SearchService.Consumers;

public class AuctionConsumer : IConsumer<AuctionCreated>
{
    public Task Consume(ConsumeContext<AuctionCreated> context)
    {
        throw new NotImplementedException();
    }
}
